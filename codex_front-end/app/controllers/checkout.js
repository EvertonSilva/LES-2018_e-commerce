import Controller from '@ember/controller';

export default Controller.extend({
  promoCode: '',
  orderTotal: 0.0,

  actions: {
    shippingAddressChange(value) {
      let order = this.get('model');
      let shippingCost = this.get('store').createRecord('shippingCost');
      let cost = 0.0;
      let purchaseTotal = parseFloat(order.get('total'));
      if(value == 1) {
        cost = 20.86;
      } else if(value == 2) {
        cost = 8.65;
      } else {
        cost = 0.0;
      }
      shippingCost.set('cost', cost);
      order.set('shippingCost', shippingCost);
      this.set('orderTotal', (purchaseTotal + cost).toFixed(2));
    }
  }
});
