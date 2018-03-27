import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.get('store').createRecord('book');
  },

  actions: {
    createBook() {
      let book = this.modelFor(this.routeName);
      var self = this;
      book.save().then(function () {
        self.transitionTo('admin.index');
      }).catch(function () {
      });
    }
  }
});
