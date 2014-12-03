underscore.path [![Build Status](https://travis-ci.org/mateusmaso/underscore.path.svg?branch=master)](https://travis-ci.org/mateusmaso/underscore.path)
===============

This library is an extension for Underscore which allows accessing nested properties using a string path.

## Features

* Access nested properties.

## Dependencies

* underscore.js (>= 1.5.0)

## Node

```javascript
var _ = require('underscore');
_.mixin(require('underscore.path'));
```

## Examples

```javascript
var object = {foo: {bar: 123}};
_.path(object, "foo.bar");
```

## License

Copyright (c) 2014 Mateus Maso. Released under an MIT license.
