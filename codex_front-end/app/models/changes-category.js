import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  changeType: DS.attr('number'),
  statusChanges: DS.hasMany('status-change')
});
