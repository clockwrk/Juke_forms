'use strict';

juke.controller('PlaylistCtrl', function($scope, PlaylistFactory, $log, $stateParams) {

  $scope.newPlaylistOutput = function(){

    PlaylistFactory.create($scope.playlistInput)
    .then(function(resultDb){
      console.log(resultDb)
    })
    .then(function(){
      $scope.playlistInput = null;
    })
    .catch($log)
  }

})
