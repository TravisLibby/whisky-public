import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('whiskies', function() {
    this.route('new');
    this.route('whisky', {path: '/:whisky_id'});
  });

  this.route('users', function() {
    this.route('new');
    this.route('update-password', {path: '/:user_id'});
  });
  
  this.route('catchall', {path: '/*wildcard'});
});

export default Router;
