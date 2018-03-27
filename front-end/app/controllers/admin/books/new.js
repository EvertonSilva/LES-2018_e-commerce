import Controller from '@ember/controller';
import { computed } from '@ember/object';
import $ from 'jquery';

var categoriesIdList = [];
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
  findCategory: function(id) {
    return this.get('store').peekRecord('category', id);
  },
  setCategories: function (list) {
    let self = this;
    return list.map(function (item) {
       return self.findCategory(item);
    });
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
    selectCategory(event) {
      categoriesIdList = $(event.target).val() || [];
      let book = this.get('model');
      let categories = this.setCategories(categoriesIdList);
      book.set('categories', categories);
    }
  }
});
