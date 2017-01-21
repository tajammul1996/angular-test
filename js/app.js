(function() {
  'use strict';

  angular.module('myfirstapp', [])

  .controller('myfirstcontroller', function ($scope){
      $scope.name ="Tajammul";
      $scope.sayhello = function () {
        return "Hello World!";
      };
  });


})();
