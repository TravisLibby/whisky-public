import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('whisky');
  },
  actions: {
    error(error) {
      if (error) {
        localStorage.clear();
        window.location.href = '../';
      }
    }
  }
});
