import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  isbn: DS.attr('string'),
  barcode: DS.attr('string'),
  enabled: DS.attr('boolean'),
  synopsis: DS.attr('string'),
  edition: DS.attr('string'),
  width: DS.attr('number'),
  height: DS.attr('number'),
  weight: DS.attr('number'),
  publish_year: DS.attr('string'),
  author: DS.belongsTo('author'),
  categories: DS.hasMany('categories'),
  price_group: DS.belongsTo('price_group'),
  publisher: DS.belongsTo('publisher')
});
