var app = angular.module('nbaRoutes');

app.controller('homeCtrl', function ($scope, homeService, jazzData, lakersData, heatData) {

  $scope.jazzData = jazzData;
  $scope.lakersData = lakersData;
  $Scope.heatData = heatData;

});
