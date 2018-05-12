import Service from '@ember/service';
import EmberArray from '@ember/array/mutable';

export default Service.extend({
  init() {
    this._super(...arguments);
    this.set('items', new EmberArray());
  },

  addItem(item) {
    this.get("items").pushObject(item);
  },

  removeItem(itemToRemove) {
    let filteredItems = this.get('items').filter(
      (item) => item.get('id') !== itemToRemove.get('id')
    );
    this.set('items', filteredItems);
  }
});
