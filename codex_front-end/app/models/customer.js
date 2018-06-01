import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  idDocument: DS.attr(),
  dob: DS.attr(),
  gender: DS.attr(),
  ranking: DS.attr(),
  creditCards: DS.hasMany('credit-card'),
  addresses: DS.hasMany('address'),
});
