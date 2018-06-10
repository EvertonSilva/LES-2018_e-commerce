import DS from 'ember-data';

export default DS.Model.extend({
  total: DS.attr('number'),
  number: DS.attr(),
  purchaseDate: DS.attr('date'),
  status: DS.attr(),
  customer: DS.belongsTo('customer'),
  orderLines: DS.hasMany('order-line'),
  payments: DS.hasMany('payment'),
  coupons: DS.hasMany('coupon'),
  shippingCost: DS.hasOne('shipping-cost'),
  shippingAddress: DS.hasOne('shipping-address')
});
