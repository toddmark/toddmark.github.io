// "release": "npm run build && git add . && git commit -m \"/****** release ******/\" && git push ",

const shell = require("shelljs");

shell.echo("Hello Shell");

// shell.exec("npm run build");

const dir = shell.cd("../toddmark.github.io");
if (dir.code !== 0) {
  shell.echo("目录不存在");
  shell.exit();
}

shell.exec("pwd");

shell.exec("rm -rf *");

shell.cp("-r", "../toddmark.github.io.source/tool", "./");

shell.exec(" git add . && git commit -m \"/****** Auto release from release.js ******/\" && git push ");
