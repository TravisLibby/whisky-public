import Ember from 'ember';

export default Ember.Controller.extend({
  isValid: Ember.computed(
    'model.name',
    'model.username',
    'model.email',
    'model.password',
    function() {
      return !Ember.isEmpty(this.get('model.name')) &&
      !Ember.isEmpty(this.get('model.username')) &&
      !Ember.isEmpty(this.get('model.email')) && 
      !Ember.isEmpty(this.get('model.password'));
    }
  ),
  actions: {
    save: function() {
      if (this.get('isValid')) {
        var _this = this;
        this.get('model').save().then(function(response) {
          if (localStorage) {
            localStorage.clear();
            localStorage.setItem('username', response.get('username'));
            localStorage.setItem('id', response.get('id'));
            console.log(response);
          } else {
            // No support. Use a fallback such as browser cookies or store on the server.
          }
          window.location.href = '/whiskies';
        }).fail(function(xhr) {
          if (xhr.status === 409) {
            // User already exists
            _this.set('errorMessage', 'A user with that username already exists.');
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
