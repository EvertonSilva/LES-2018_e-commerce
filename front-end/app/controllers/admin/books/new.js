import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({

  allAuthors: computed(function getAuthors() {
    return this.get('store').findAll('author');
  }),

  allCategories: computed(function getCategories() {
    return this.get('store').findAll('category');
  }),

  allPublishers: computed(function getPublishers() {
    return this.get('store').findAll('publisher');
  }),

  findAuthor: function(id) {
    return this.get('store').findRecord('author', id);
  },
  findPublisher: function(id) {
    return this.get('store').findRecord('publisher', id);
  },

  actions: {
    selectAuthor(value) {
      let book = this.get('model');
      book.set('author', this.findPublisher(value));
    },
    selectPublisher(value) {
      let book = this.get('model');
      book.set('publisher', this.findPublisher(value));
    },
  }
});
