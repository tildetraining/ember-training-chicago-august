(function() {
"use strict";

window.App = Ember.Application.create();

App.Router.map(function() {
  this.resource('album', { path: '/album/:album_id' });
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return App.ALBUM_FIXTURES;
  }
});

App.AlbumRoute = Ember.Route.extend({
  model: function(params) {
    return App.ALBUM_FIXTURES.findProperty('id', params.album_id);
  }
});

})();
