import Service from '@ember/service';
import CartItem from '../models/cart-item';

export default Service.extend({
  init() {
    this._super(...arguments);
    this.set('items', new Array());
  },

  addItem(item) {
    let _item = this._findItem(item);
    if(undefined === _item) {
      let cartItem = new CartItem();
      cartItem.set('book', item);
      cartItem.set('amount', 1);
      this.get("items").pushObject(cartItem);
    } else {
      let amount = _item.get('amount');
      _item.set('amount', amount + 1);
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
  }
});
