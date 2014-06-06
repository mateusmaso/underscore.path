(function(_) {

  _.path = function(context, key) {
    var paths = key.split('.');
    var object = context[paths.shift()];
    for (var index = 0; index < paths.length; index++) object = object[paths[index]];

    return object;
  };

})(_);