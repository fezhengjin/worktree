var fs = require('fs');
var path = require('path');
var ignores = ['node_modules', 'bower_components', '.git'];

function dirTree(filename) {
  var stats = fs.lstatSync(filename);
  var info = {
    path: filename,
    name: path.basename(filename)
  };

  if (stats.isDirectory()) {
    info.type = 'folder';

    if (ignores.indexOf(info.name) === -1) {
      info.children = fs.readdirSync(filename).map(function(child){return dirTree(filename+ '/' + child)});
    }
  } else {
    info.type = 'file';
    info.size = stats.size;
  }
  return info
}

module.exports = dirTree;