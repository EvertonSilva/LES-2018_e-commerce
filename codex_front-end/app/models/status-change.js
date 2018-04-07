import DS from 'ember-data';

export default DS.Model.extend({
  reason: DS.attr('string'),
  book: DS.belongsTo('book'),
  changesCategory: DS.belongsTo('changes-category')
});
