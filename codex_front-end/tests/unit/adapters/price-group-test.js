import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Adapter | price group', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let adapter = this.owner.lookup('adapter:price-group');
    assert.ok(adapter);
  });
});
