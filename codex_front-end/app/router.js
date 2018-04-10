import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('admin', function() {
    this.route('books', function () {
      this.route('new');
      this.route('edit', { path: '/:book_id/edit' });
    });
  });
  this.route('books');
  this.route('cart');
});

export default Router;
