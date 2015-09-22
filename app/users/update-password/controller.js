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
    updatePassword: function() {
      var _this = this;
      if (this.get('isValid')) {
        Ember.$.ajax({
          method: 'PUT',
          url: '/api/users/' + localStorage.getItem('id'),
          data: {password: _this.get('password')}
        })
        .done(function( msg ) {
          alert( "Data Saved: " + msg );
        });
      } else {
        alert('Not Valid!');
      }
    }
  }
});
