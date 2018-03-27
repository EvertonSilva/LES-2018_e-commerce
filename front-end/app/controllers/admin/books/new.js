import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({

  allAuthors: computed(function getAuthors() {
    return this.get('store').findAll('author');
  }),

  findAuthor: function(id) {
    return this.get('store').findRecord('author', id);
  },

  actions: {
    selectAuthor(value) {
      let book = this.get('model');
      book.set('author', this.findAuthor(value));
    }
  }
});
