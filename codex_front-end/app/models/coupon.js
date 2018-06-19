import DS from 'ember-data';

export default DS.Model.extend({
  code: DS.attr(),
  coupon_type: DS.attr(),
  discount: DS.attr(),
  valid: DS.attr('boolean'),
  order: DS.belongsTo('order')
});
