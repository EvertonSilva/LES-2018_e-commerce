import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  enabled: DS.attr('boolean'),
  title: DS.attr('string'),
  isbn: DS.attr('string'),
  barcode: DS.attr('string'),
  synopsis: DS.attr('string'),
  pageNumbers: DS.attr('number'),
  publishYear: DS.attr('string'),
  edition: DS.attr('string'),
  width: DS.attr('number'),
  height: DS.attr('number'),
  weight: DS.attr('number'),
  depth: DS.attr('number'),
  author: DS.belongsTo('author'),
  publisher: DS.belongsTo('publisher'),
  priceGroup: DS.belongsTo('price-group'),
  orderLine: DS.belongsTo('order-liine'),
  statusChanges: DS.hasMany('status-change'),
  categories: DS.hasMany('category'),

  price: computed('', function() {
    const amount = Math.random() * (100 - 10) + 10;
    return amount.toFixed(2);
  })
});
