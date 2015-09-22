import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function() {
    var username = document.URL.split('username=')[1] ? document.URL.split('username=')[1] : localStorage.getItem('username');
    localStorage.setItem('username', username);
  }
});
