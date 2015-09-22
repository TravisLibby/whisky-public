import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    if (localStorage.getItem('username')) {
      // user is already logged in
      this.transitionTo('whiskies');
    }
  }
});
