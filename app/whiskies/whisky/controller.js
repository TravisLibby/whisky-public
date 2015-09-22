import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    deleteWhisky: function(self) {
      var whisky = self.get('model');
      if (confirm('Are you sure you want to delete ' + whisky.get('distiller') + ' ' + whisky.get('bottle') + '.')) {
        whisky.deleteRecord();
        whisky.save();
        self.set('successMessage', 'Your whisky review has been successfully removed.');
        // Hide the deleted whisky
        // Ember.$('#whisky-review').hide();
      }
      return false;
    }
  }
});
