import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  isbn: DS.attr('string'),
  barcode: DS.attr('string'),
  enabled: DS.attr('boolean'),
  synopsis: DS.attr('string'),
  author: DS.belongsTo('author'),
  editions: DS.hasMany('edition'),
  categories: DS.hasMany('categories')
});
