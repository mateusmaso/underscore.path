underscore.path
===============
This library is an extension for Underscore which allows accessing nested properties using a string path.

## Features

* Access nested properties.

## Dependencies

* underscore.js (>= 1.5)

## Examples

```javascript
var object = {foo: {bar: 123}};

_.path(object, "foo.bar"); // 123
```

## License

Copyright (c) 2014 Mateus Maso. Released under an MIT license.
