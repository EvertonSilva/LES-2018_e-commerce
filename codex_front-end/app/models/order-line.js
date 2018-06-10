import DS from 'ember-data';

export default DS.Model.extend({
  amount: DS.attr('number'),
  sellPrice: DS.attr('number'),
  book: DS.hasOne('book'),
  order: DS.belongsTo('order')
});
