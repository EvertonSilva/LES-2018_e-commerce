import { hash } from 'rsvp';
import Route from '@ember/routing/route';

export default Route.extend({
  getCollection(modelName) {
    return this.get('store').findAll(modelName);
  },

  model(params) {
    return hash({
      book: this.get('store').findRecord('book', params.book_id),
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
    saveBook(book) {
      book.save().then(() => this.transitionTo('admin.books'));
    },
    willTransition(transition) {
      let model = this.controller.get('model');
      if(model.book.get('hasDirtyAttributes')) {
        let confirmation = confirm('Your changes will be lost, are you sure?');
        if(confirmation) {
          model.book.rollbackAttributes();
        } else {
          transition.abort();
        }
      }
    },
  },
});
