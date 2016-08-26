'use strict'

juke.config(function ($stateProvider) {

  $stateProvider.state('newPlaylist', {
    url: '/playlist/new',
    templateUrl: '/js/playlist/templates/playlist-form.html',
    controller: 'PlaylistCtrl'

  });

  // $stateProvider.state('singlePlaylist', {
  //   url: '/playlist/:playlistId',
  //   templateUrl: '/js/playlist/templates/single-playlist-form.html',
  //   controller: 'PlaylistCtrl',
  //   resolve: {
  //     thePlaylist: function (PlaylistFactory, $stateParams) {
  //       return PlaylistFactory.fetchById($stateParams.playlistId);
  //     }
  //   }
  // });

  // $stateProvider.state('singlePlaylist', {
  //   url: '/playlist/:playlistId',
  //   templateUrl: '/js/playlist/templates/single-playlist-form.html',
  //   controller: function($scope, $stateParams){
  //     $scope.currentPlaylist = $stateParams.playlistId
  //       console.log($scope.currentPlaylist);
  //   },
  //

    // resolve: {
    //   thePlaylist: function (PlaylistFactory, $stateParams) {
    //     return PlaylistFactory.fetchById($stateParams.playlistId);
    //   }

  });

});
