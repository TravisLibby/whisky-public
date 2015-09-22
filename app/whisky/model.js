import DS from 'ember-data';

export default DS.Model.extend({
  distiller: DS.attr('string'),
  bottle: DS.attr('string'),
  region: DS.attr('string'),
  color: DS.attr('string'),
  rating: DS.attr('number'),
  notes: DS.attr('string'),
  whiskyId: DS.attr('string')  
});
