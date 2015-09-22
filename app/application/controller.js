import Ember from 'ember';

export default Ember.Controller.extend({
  userId: localStorage.getItem('id'),
  actions: {
    logout: function() {
      Ember.$.get('../api/auth/logout', function() {
        localStorage.clear();
        window.location.href = '../';
      });
    },
  },
});
