import Ember from 'ember';

export default Ember.Component.extend({
  isValid: Ember.computed(
    'model.distiller',
    'model.bottle',
    'model.region',
    'model.color',
    'model.rating',
    'model.notes',
    function () {
      return !Ember.isEmpty(this.get('model.distiller')) &&
      !Ember.isEmpty(this.get('model.bottle')) &&
      !Ember.isEmpty(this.get('model.region')) &&
      !Ember.isEmpty(this.get('model.color')) &&
      this.get('model.region') !== 'Region' &&
      !Ember.isEmpty(this.get('model.rating')) &&
      !Ember.isEmpty(this.get('model.notes'));
    }
  ),
  actions: {
    save: function() {
      this.sendAction('save', this);
    },
    cancel: function() {
      this.get('model').deleteRecord();
      return false;
    }
  }
});
