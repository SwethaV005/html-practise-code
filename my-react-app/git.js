const { exec } = require("child_process");

const message = process.argv.slice(2).join(" ");

exec(`git add . && git commit -m "${message}"`, (err) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log("Commit successful!");
});