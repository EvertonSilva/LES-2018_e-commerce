import Service from '@ember/service';
import { computed } from '@ember/object';
import CartItem from '../models/cart-item';

export default Service.extend({
  init() {
    this._super(...arguments);
    this.set('items', new Array());
  },

  total: computed('items.@each.amount', function() {
    let listItems = this.get('items');
    let totalSum = 0;
    listItems.forEach((item) => totalSum += item.get('subtotal'));
    return totalSum.toFixed(2);
  }),

  addItem(item) {
    let _item = this._findItem(item);
    if(undefined === _item) {
      let cartItem = new CartItem();
      cartItem.set('book', item);
      cartItem.set('amount', 1);
      cartItem.set('price', this._getPrice());
      this.get("items").pushObject(cartItem);
    } else {
      let currentAmount = _item.get('amount');
      _item.set('amount', currentAmount + 1);
    }
  },

  removeItem(itemToRemove) {
    let filteredItems = this.get('items').filter(
      (item) => item.book.get('id') !== itemToRemove.book.get('id')
    );
    this.set('items', filteredItems);
  },

  _findItem(lookUpItem) {
    return this.get('items').find((item) => item.get('book').get('id') === lookUpItem.get('id'));
  },

   _getPrice() {
     const price = Math.random() * (100 - 10) + 10;
     return price.toFixed(2);
   }
});
