import EmberObject from '@ember/object';

export default EmberObject.extend({
  init() {
    this.set('book', null);
    this.set('amount', 0);
  }
});
