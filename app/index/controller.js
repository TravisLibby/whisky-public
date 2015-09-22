import Ember from 'ember';

export default Ember.Controller.extend({
  isValid: Ember.computed(
    'username',
    'password',
    function() {
      return !Ember.isEmpty(this.get('username')) &&
      !Ember.isEmpty(this.get('password'));
    }
  ),
  actions: {
    login: function() {
      var _this = this;
      var data = {
        username: this.get('username'),
        password: this.get('password')
      };
      if (_this.get('isValid')) {
        Ember.$.post('/api/auth/login', data, function(response) {
          var username = response.users.username;
          window.location.href = '/whiskies?username=' + username;
          localStorage.setItem('id', response.users._id);
        })
        .fail(function(xhr) {
          if (xhr.status === 403) {
            // Unauthorized user
            _this.set('errorMessage', 'Wrong username or password.');
          }
          if (xhr.status === 500) {
            // Server error
            _this.set('errorMessage', 'Please try again later.');
          }
        });
      } else {
        this.set('errorMessage', 'All fields are required.');
      }
      return false;
    }
  }
});
