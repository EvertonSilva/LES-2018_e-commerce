import { hash } from 'rsvp';
import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return hash({
      book: this.store.createRecord('book'),
      categories: this.store.findAll('category'),
      authors: this.store.findAll('author'),
      publishers: this.store.findAll('publisher'),
      priceGroups: this.store.findAll('priceGroup')
    });
  },

  setupController(controller, model) {
    controller.set('book', model.book);
    controller.set('categories', model.categories);
    controller.set('authors', model.authors);
    controller.set('publishers', model.publishers);
    controller.set('priceGroups', model.priceGroups);

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
