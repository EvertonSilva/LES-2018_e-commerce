import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
// import { hash } from 'rsvp';

export default Route.extend({
  order: null,
  shoppingCart: service(),

  getOrderlines() {
    return this.get('shoppingCart').items.map(cartItem => {
      let orderLine = this.get('store').createRecord('orderLine');
      orderLine.set('amount', cartItem.get('amount'));
      orderLine.set('sellPrice', cartItem.get('price'));
      orderLine.set('book', cartItem.get('book'));
      return orderLine;
    });
  },

  beforeModel() {
    if(this.get('order')) {
      this.get('store').deleteRecord(this.get('order'));
      this.set('order', null);
    }
  },

  model() {
    this.set('order', this.get('store').createRecord('order'));
    this.get('order').set('orderLines', this.getOrderlines());
    this.get('order').set('total', this.get('shoppingCart').get('total'));
    return this.get('order');
  },

});
