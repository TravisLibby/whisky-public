import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function(self) {
      var _this = this;
      if (self.get('isValid')) {
        self.get('model').save().then(function() {
          // Hide error message
          Ember.$('.alert-danger').hide();
          self.set('successMessage', 'Your whisky review has been saved!');
          // Reset form fields
          Ember.$('form').trigger('reset');
          // Reset the model
          _this.set('model', _this.store.createRecord('whisky'));
        })
        .catch(function(xhr) {
          if (xhr.status === 500) {
            self.set('errorMessage', 'Please try again later.');
          }
        });
      } else {
        // Show the error message
        Ember.$('.alert-danger').show();
        self.set('errorMessage', 'All fields are required.');
      }
      return false;
    }
  }
});
