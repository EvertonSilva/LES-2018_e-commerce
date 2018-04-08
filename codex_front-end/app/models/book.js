import DS from 'ember-data';

export default DS.Model.extend({
  enabled: DS.attr('boolean'),
  title: DS.attr('string'),
  isbn: DS.attr('string'),
  barcode: DS.attr('string'),
  synopsis: DS.attr('string'),
  pageNumbers: DS.attr('number'),
  edtion: DS.attr('string'),
  width: DS.attr('number'),
  height: DS.attr('number'),
  weight: DS.attr('number'),
  depth: DS.attr('number'),
  author: DS.belongsTo('author'),
  publisher: DS.belongsTo('publisher'),
  priceGroup: DS.belongsTo('price-group'),
  statusChanges: DS.hasMany('status-change'),
  categories: DS.hasMany('category'),
});
