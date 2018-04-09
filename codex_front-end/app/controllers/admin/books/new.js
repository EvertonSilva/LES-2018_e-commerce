import Controller from '@ember/controller';
import { observer } from '@ember/object';
import $ from 'jquery';

export default Controller.extend({
  categoryList: null,

  setCategoriesToBook: observer('categoryList', function() {
    const book = this.get('model').book;
    const collection = this.get('model').categories;
    const categories = this.get('categoryList').map(catId => {
      return collection.store.peekRecord(collection.modelName, catId);
    });
    book.set('categories', categories);
  }),

  actions: {
    selectEntity: function(event) {
      const model = this.get('model');
      const selectedId = event.target.id;
      const collection = model[selectedId];
      const book = model.book;
      const entity = collection.store.peekRecord(collection.modelName, event.target.value);
      if(collection.modelName === 'price-group') {
        book.set('priceGroup', entity);
      } else {
        book.set(collection.modelName, entity);
      }
    },
    selectCategories: function (event) {
      const selectedCats = $(event.target).val();
      this.set('categoryList', selectedCats || []);
    },
  }
});
