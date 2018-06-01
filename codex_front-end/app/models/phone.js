import DS from 'ember-data';

export default DS.Model.extend({
  phoneNumberType: DS.attr(),
  areaCode: DS.attr(),
  number: DS.attr(),
});
