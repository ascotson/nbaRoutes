var app = angular.module('nbaRoutes');
// the resolved data from the router needs to be injected into the controller
app.controller('teamCtrl', function ($scope, $stateParams, teamService, teamData) {

  var team = $stateParams.team;

  if (team === 'utahjazz') {
    $scope.homeTeam = 'Utah Jazz';
    $scope.logoPath = 'images/jazz-logo.png';
  } else if (team === 'losangeleslakers') {
    $scope.homeTeam = 'Los Angeles Lakers';
    $scope.logoPath = 'images/lakers-logo.png';
  } else if (team === 'miamiheat') {
    $scope.homeTeam = 'Miami Heat';
    $scope.logoPath = 'images/heat-logo.png';
  }
  console.log(teamData);
  $scope.teamData = teamData;

  $scope.showNewGameForm = false;

  $scope.toggleNewGameForm = function()  {
    $scope.showNewGameForm = !$scope.showNewGameForm;
    };

  $scope.addGame = function() {
    var newGame = {
      homeTeam: $stateParams.team,
      homeTeamScore: $scope.homeTeamScore,
      opponentScore: $scope.opponentScore
    };
    teamService.addNewGame(newGame)
      .then(function(response){
        console.log('POST success!');
      }, function(err){
          console.log('POST fail!');
      });
    $scope.homeTeamScore = "";
    $scope.opponentScore = "";
    $scope.showNewGameForm = false;
  };

});
