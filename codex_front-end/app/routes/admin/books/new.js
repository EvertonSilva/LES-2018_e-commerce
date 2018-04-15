import { hash } from 'rsvp';
import Route from '@ember/routing/route';

export default Route.extend({
  getCollection(modelName) {
    return this.get('store').findAll(modelName);
  },

  model() {
    return hash({
      book: this.get('store').createRecord('book'),
      collections: {
        categories: this.getCollection('category'),
        publishers: this.getCollection('publisher'),
        authors: this.getCollection('author'),
        priceGroups: this.getCollection('priceGroup')
      },
    });
  },

  setupController(controller, model) {
    controller.set('collections', model.collections);
    this._super(controller, model);
  },

  actions: {
    saveBook(newBook) {
      newBook.save().then(() => this.transitionTo('admin.books'));
    },
    willTransition() {
      this.controller.get('model.book').rollbackAttributes();
    },
  },
});
