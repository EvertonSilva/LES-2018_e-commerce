import { hash } from 'rsvp';
import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return hash({
      book: this.store.findRecord('book', params.book_id),
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
    saveBook(book) {
      book.save().then(() => this.transitionTo('admin.books'));
    },
    willTransition(transition) {
      let model = this.controller.get('model').book;
      if(model.get('hasDirtyAttributes')) {
        let confirmation = confirm('Your changes will be lost, are you sure?');
        if(confirmation) {
          model.rollbackAttributes();
        } else {
          transition.abort();
        }
      }
    },
  },
});
