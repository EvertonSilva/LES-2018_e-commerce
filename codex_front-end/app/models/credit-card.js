import DS from 'ember-data';

export default DS.Model.extend({
  cardNumber: DS.attr(),
  printedName: DS.attr(),
  securityCode: DS.attr(),
  creditcardCompany: DS.belongsTo("creditcard-company"),
  customer: DS.belongsTo("customer"),
});
