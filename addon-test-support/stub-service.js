import { getContext } from "@ember/test-helpers";
import { run } from "@ember/runloop";
import td from "testdouble";

function replace(owner, name) {
  const serviceName = `service:${name}`;
  const original = owner.lookup(serviceName);
  const replacement = td.object(original);

  run(() => {
    owner.unregister(serviceName);
    owner.register(serviceName, replacement, { instantiate: false });
  });

  return replacement;
}

/**
 * Replace a service with a stubbed version of itself
 *
 * Each method on the service will be replaced with a TestDouble function
 */
export default function stubService() {
  if (arguments.length === 2) {
    let [hooks, name] = arguments;

    hooks.beforeEach(function() {
      replace(this.owner, name);
    });

    hooks.afterEach(function() {
      td.reset();
    });
  } else if (arguments.length === 1) {
    let [name] = arguments;
    let { owner } = getContext();

    return replace(owner, name);
  } else {
    throw new Error("Unexpected number of arguments");
  }
}
