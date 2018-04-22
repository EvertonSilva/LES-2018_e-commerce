import Component from '@ember/component';
import { observer } from '@ember/object';
import $ from 'jquery';

export default Component.extend({
  entity: null,
  categoryIDs: null,
  categories: null,

  filterCategories: observer('categoryIDs', function() {
    this.categories = this.get('categoryIDs').map(catId => {
      return this.collection.find(item => item.id == catId);
    });
  }),

  actions: {
    // handler for change event on form select tag
    selectEntity(event) {
      const selectedVal = $(event.target).val();           // get value for selected element
      if(this.isMultiple) {                                // selected from multiple select tag?
        this.set('categoryIDs', selectedVal);              // store category IDs for latter process
        this.get('action')(this.get('categories'));
      } else {
        this.set('entity', this.collection.find(item => item.id === selectedVal));
        this.get('action')(this.get('entity'));
      }
    },
  }
});
