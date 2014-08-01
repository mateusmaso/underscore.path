// underscore.path
// ---------------------
// v0.1.0
//
// Copyright (c) 2014 Mateus Maso
// Distributed under MIT license
//
// http://github.com/mateusmaso/underscore.path

(function(root) {

  var path = function(context, key) {
    var paths = key.split('.');
    var object = context[paths.shift()];
    for (var index = 0; index < paths.length; index++) object = object[paths[index]];
    return object;
  };

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports)
      module.exports = path;
    exports = path;
  } else {
    root._.path = path;
  }

})(this);