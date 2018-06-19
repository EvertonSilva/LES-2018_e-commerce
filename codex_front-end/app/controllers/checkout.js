import Controller from '@ember/controller';
import { computed } from '@ember/object';
import $ from 'jquery';

const creditCards = [];

export default Controller.extend({
  promoCode: '',
  orderDiscount: 0.0,
  shippingCost: 0.0,
  applyDiscount: false,
  creditCards: null,
  exchangeCoupons: null,

  orderTotal: computed('shippingCost', 'orderDiscount', function() {
    let discount = this.get('orderDiscount');
    let shpCost = this.get('shippingCost');
    let total = this.get('model').get('total');

    return ((total - discount) + shpCost).toFixed(2);
  }),

  init() {
    this._super(...arguments);
    this.set('creditCards', []);
    this.set('exchangeCoupons', []);
  },

  actions: {
    shippingAddressChange(value) {
      let cost = 0.0;
      if(value == 1) {
        cost = 20.86;
      } else if(value == 2) {
        cost = 8.65;
      } else {
        cost = 0.0;
      }
      this.set('shippingCost', cost);
    },
    couponCheck(value) {
      if(value == "AB3021") {
        this.set('orderDiscount', 25.65);
        this.set('applyDiscount', true);
      }
    },
    toggleCreditCard(event) {
      const val = event.target.value;
      if(event.target.checked) {
        // add credit card to array of cards
        this.get('creditCards').push(val);
      } else {
        // remove credit card from array of cards
        const i = this.get('creditCards').indexOf(val);
        this.get('creditCards').splice(i, 1);
      }
    },
    toggleExchangeCoupons(event) {
      const target = event.target;
      const val = target.value;
      const _discount = $(target).data('discount');
      const data = { id: val, discount: _discount };

      if(event.target.checked) {
        // add coupons to array of coupons
        this.get('exchangeCoupons').push(data);
        this.set('orderDiscount', this.get('orderDiscount') + _discount);
      } else {
        // remove coupons from array of coupons
        const i = this.get('exchangeCoupons').indexOf(data);
        this.get('exchangeCoupons').splice(i, 1);
        this.set('orderDiscount', this.get('orderDiscount') - _discount);
      }
    }
  }
});
