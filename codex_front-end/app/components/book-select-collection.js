import Component from '@ember/component';
import { observer } from '@ember/object';
import $ from 'jquery';

export default Component.extend({
  entity: null,
  categoryIDs: null,

  filterCategories: observer('categoryIDs', function() {
  }),

  actions: {
    // handler for change event on form select tag
    selectEntity(event) {
      const selectedVal = $(event.target).val(); // get value for selected element
      if(this.isMultiple) { // selected from multiple select tag?
        this.set('categoryIDs', selectedVal); // store category IDs for latter process
      } else {
        this.set('entity', this.collection.find(item => item.id === selectedVal));
        const modelName = this.isPriceGroup ? 'priceGroup':this.entity.constructor.modelName;
      }
    },
  }
});
