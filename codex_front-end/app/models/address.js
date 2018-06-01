import DS from 'ember-data';

export default DS.Model.extend({
  addressType: DS.attr(),
  publicPlaceType: DS.attr(),
  publicPlace: DS.attr(),
  number: DS.attr(),
  district: DS.attr(),
  postalCode: DS.attr(),
  city: DS.attr(),
  state: DS.attr(),
  country: DS.attr(),
  notes: DS.attr(),
  customers: DS.hasMany("customer"),
});
