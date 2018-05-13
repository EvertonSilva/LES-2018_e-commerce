import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  shoppingCart: service(),

  actions: {
    removeFromCart(book) {
      alert('this book will be removed from your cart');
      this.get('shoppingCart').removeItem(book);
    }
  }
});
