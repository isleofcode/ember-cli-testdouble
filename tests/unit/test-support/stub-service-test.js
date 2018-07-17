import { module, test } from "qunit";
import { setupTest } from "ember-qunit";
import { stubService } from "ember-cli-testdouble/test-support";

module("Test Helpers | stub-service", function(hooks) {
  setupTest(hooks);

  module("as a `hooks` reciever", function(hooks) {
    stubService(hooks, "to-stub");

    test("it can replace a service", function(assert) {
      let service = this.owner.lookup("service:to-stub");
      service.method();

      assert.verify(service.method());
    });
  });

  module("invoking without `hooks`", function(hooks) {
    hooks.beforeEach(function() {
      this.service = stubService("to-stub");
    });

    test("it can replace a service", function(assert) {
      let service = this.owner.lookup("service:to-stub");
      service.method();

      assert.verify(service.method());
      assert.equal(
        service,
        this.service,
        "Returns a references to the stubbed service"
      );
    });
  });
});
