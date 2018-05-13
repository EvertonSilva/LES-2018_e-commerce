import EmberObject, { computed } from '@ember/object';

export default EmberObject.extend({
  init() {
    this.set('book', null);
    this.set('amount', 0);
    this.set('price', 0.0);
  },

  subtotal: computed('amount', 'price', function() {
    let amount = this.get('amount');
    let price = this.get('price');

    return amount * price;
  }),

});
