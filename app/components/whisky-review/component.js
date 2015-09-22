import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteWhisky: function() {
      this.sendAction('deleteWhisky', this);
    }
  }
});
