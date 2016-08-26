'use strict';

juke.factory('PlaylistFactory', function ($http) {

  var cachedPlaylists = [];

  var PlaylistFactory = {};

  PlaylistFactory.create = function (data) {
    return $http.post('/api/playlists', data)
    .then(function (response) {
      // return response.data;

      angular.copy(response.data, cachedPlaylists);
      return cachedPlaylists;
    });
  };

  PlaylistFactory.fetchAll = function() {
    return $http.get('/api/playlists')
    .then(function(response){
      var playlist = response.data
      cachedPlaylists.push(playlist);
      return playlist;
      // console.log(getData.data);
      // return getData.data;
    });
  }

  PlaylistFactory.fetchById = function (id) {
    return $http.get('/api/playlist/' + id)
    .then(function (response) { return response.data; })
    .then(function (playlist) {
      // album.songs = album.songs.map(SongFactory.convert);
      return playlist;
    });
  };

  return PlaylistFactory;

});
