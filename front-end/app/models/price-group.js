import DS from 'ember-data';

export default DS.Model.extend({
  description: DS.attr('string'),
  markup: DS.attr('number'),
  books: DS.hasMany('book')
});
