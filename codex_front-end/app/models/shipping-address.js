import DS from 'ember-data';

export default DS.Model.extend({
  addressType: DS.attr(),
  publicPlace: DS.attr(),
  number: DS.attr(),
  district: DS.attr(),
  postalCode: DS.attr(),
  order: DS.belongsTo('order')
});
