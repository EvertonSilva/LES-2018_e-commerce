import DS from 'ember-data';

export default DS.Model.extend({
  postalCode: DS.attr('string'),
  cost: DS.attr('number'),
  order: DS.belongsTo('order')
});
