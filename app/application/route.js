import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return {
      username: document.URL.split('username=')[1] ? document.URL.split('username=')[1] : localStorage.getItem('username')
    };
  }
});
