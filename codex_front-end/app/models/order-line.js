import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  amount: DS.attr('number'),
  sellPrice: DS.attr('number'),
  book: DS.belongsTo('book'),
  order: DS.belongsTo('order'),

  subtotal: computed('amount', 'price', function() {
    let amount = this.get('amount');
    let price = this.get('sellPrice');

    return (amount * price).toFixed(2);
  })
});
