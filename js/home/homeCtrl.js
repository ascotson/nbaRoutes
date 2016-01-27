var app = angular.module('nbaRoutes');

app.controller('homeCtrl', function ($scope, homeService) {
  $scope.teams = homeService.getAllTeamData();
});
