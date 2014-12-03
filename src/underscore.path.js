(function(root, factory) {

  if (typeof exports !== 'undefined') {
    var _ = require('underscore');
    if (typeof module !== 'undefined' && module.exports)
      module.exports = factory(_);
    exports = factory(_);
  } else {
    root._.mixin(factory(root._));
  }

}(this, function(_) {

  return {
    path: function(context, key) {
      var paths = key.split('.');
      var object = context[paths.shift()];

      _.each(paths, function(key) {
        object = object[key];
      });

      return object;
    }
  };

}));
