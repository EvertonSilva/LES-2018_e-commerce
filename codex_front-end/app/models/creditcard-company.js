import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  creditCards: DS.hasMany("credit-card"),
});
