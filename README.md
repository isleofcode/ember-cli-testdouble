# Ember-cli-testdouble

Shim for testdouble / ember-cli

## Usage

```
ember install ember-cli-testdouble
```

Then import as follows:

```
import td from 'testdouble';
```

## Test Helpers

### `stubService`

Included is a function that can replace a service with one stubbed using [`td.object()`][td-object].

```js
import td from "testdouble";
import { stubService } from "ember-cli-testdouble/test-support";

test("verifying a method invocation", function(assert) {
  assert.expect(0); // Won't actually use `assert` in this test

  stubService("some-service");

  let someService = this.owner.lookup("service:some-service");
  someService.method();

  td.verify(someService.method()); // Passes!
});
```

## License

This project is licensed under the [MIT License](LICENSE.md).

[td-object]: https://github.com/testdouble/testdouble.js/blob/master/docs/4-creating-test-doubles.md#tdobject
