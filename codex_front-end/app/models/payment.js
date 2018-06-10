import DS from 'ember-data';

export default DS.Model.extend({
  payMethod: DS.attr(),
  amount: DS.attr('number'),
  order: DS.belongsTo('order')
});
