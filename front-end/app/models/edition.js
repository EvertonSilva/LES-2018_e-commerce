import DS from 'ember-data';

export default DS.Model.extend({
  publish_year: DS.attr(),
  page_numbers: DS.attr('number'),
  dimensions: DS.attr(),
  publisher: DS.belongsTo('publisher'),
  book: DS.belongsTo('book')
});
