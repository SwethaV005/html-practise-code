const Arborist = require('C:/Program Files/nodejs/node_modules/npm/node_modules/@npmcli/arborist');
const fs = require('fs');

async function run() {
  const arb = new Arborist({ path: './' });
  const tree = await arb.loadVirtual(); 

  // Format the tree data into a clean structure
  const summary = {
    projectName: tree.name,
    path: tree.realpath,
    totalDependencies: tree.children.size,
    packages: Array.from(tree.children.values()).map(node => ({
      name: node.name,
      version: node.package.version,
      location: node.location,
      dependencies: Array.from(node.edgesOut.values()).map(edge => ({
        name: edge.name,
        spec: edge.spec,
        type: edge.type,
      }))
    }))
  };

  // Write all data to output.json
  fs.writeFileSync('arborist-output.json', JSON.stringify(summary, null, 2));
  console.log('Saved full output to arborist-output.json!');
}

run();