const Arborist = require('C:/Program Files/nodejs/node_modules/npm/node_modules/@npmcli/arborist');
const fs = require('fs');

async function inspectProject() {
  const arb = new Arborist({ path: './' });
  
  // Build the in-memory tree from package-lock.json / node_modules
  const tree = await arb.loadVirtual(); 

  let output = [];
  output.push("==========================================================");
  output.push("               ARBORIST TREE INSPECTION REPORT            ");
  output.push("==========================================================\n");

  // Get all inventory nodes (every Node and Link in the entire tree)
  const allNodes = Array.from(tree.inventory.values());

  output.push(`TOTAL NODES FOUND: ${allNodes.length}\n`);

  // --- SECTION 1: NODES ---
  output.push("----------------------------------------------------------");
  output.push(" 1. CLASS NODE (Physical Folders on Disk) ");
  output.push("----------------------------------------------------------");

  allNodes.filter(n => !n.isLink).forEach((node, index) => {
    output.push(`\n[NODE #${index + 1}] ${node.name || 'ROOT'}`);
    output.push(`  ├─ node.isRoot:     ${node.isRoot}`);
    output.push(`  ├─ node.location:   ${node.location || '(root)'}`);
    output.push(`  ├─ node.realpath:   ${node.realpath}`);
    output.push(`  ├─ node.parent:     ${node.parent ? node.parent.name || 'ROOT' : 'null (Top of tree)'}`);
    output.push(`  ├─ node.children:   [${Array.from(node.children.keys()).join(', ')}]`);
    output.push(`  ├─ node.package:    ${node.package.name}@${node.package.version}`);
    output.push(`  ├─ node.dev:        ${node.dev}`);
    output.push(`  ├─ node.peer:       ${node.peer}`);
    output.push(`  └─ node.optional:   ${node.optional}`);
  });

  // --- SECTION 2: EDGES ---
  output.push("\n----------------------------------------------------------");
  output.push(" 2. CLASS EDGE (Dependency Relationships) ");
  output.push("----------------------------------------------------------");

  let edgeCount = 0;
  allNodes.forEach((node) => {
    const edges = Array.from(node.edgesOut.values());
    edges.forEach((edge) => {
      edgeCount++;
      output.push(`\n[EDGE #${edgeCount}]`);
      output.push(`  ├─ edge.from:   ${edge.from.name || 'ROOT'}`);
      output.push(`  ├─ edge.name:   ${edge.name}`);
      output.push(`  ├─ edge.spec:   ${edge.spec}`);
      output.push(`  ├─ edge.type:   ${edge.type}`);
      output.push(`  ├─ edge.to:     ${edge.to ? edge.to.name + '@' + edge.to.package.version : 'null (Unmet/Missing)'}`);
      output.push(`  ├─ edge.valid:  ${edge.valid}`);
      output.push(`  └─ edge.error:  ${edge.error || 'none'}`);
    });
  });

  // --- SECTION 3: LINKS ---
  output.push("\n----------------------------------------------------------");
  output.push(" 3. CLASS LINK (Symlinks / Local Packages) ");
  output.push("----------------------------------------------------------");

  const links = allNodes.filter(n => n.isLink);
  if (links.length === 0) {
    output.push("\nNo Link objects (symlinks or workspace links) found in this project.");
  } else {
    links.forEach((link, index) => {
      output.push(`\n[LINK #${index + 1}] ${link.name}`);
      output.push(`  ├─ link.isLink: ${link.isLink}`);
      output.push(`  ├─ link.path:   ${link.path}`);
      output.push(`  ├─ link.target: ${link.target ? link.target.realpath : 'null'}`);
      output.push(`  └─ link.location: ${link.location}`);
    });
  }

  // Write out to a clear text file
  const reportText = output.join('\n');
  fs.writeFileSync('arborist-full-report.txt', reportText);

  console.log("Success! Full report generated in 'arborist-full-report.txt'");
}

inspectProject();