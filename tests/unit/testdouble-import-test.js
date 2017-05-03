import { module, test } from 'qunit';
import td from 'testdouble';

module('testdouble import');

test('can import `testdouble`', function(assert) {
  const double = td.function();
  td.when(double('foo')).thenReturn('bar');

  assert.equal(double('foo'), 'bar');
});
