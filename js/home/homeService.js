var app = angular.module('nbaRoutes');

app.service('homeService', function($q, teamService){
  
  var teams = {
    'utahjazz': {
      homeTeam: 'Utah Jazz',
      logoPath: 'images/jazz-logo.png',
    },
    'miamiheat': {
      homeTeam: 'Miami Heat',
      logoPath: 'images/heat-logo.png'
    },
    'losangeleslakers': {
      homeTeam: 'Los Angeles Lakers',
      logoPath: 'images/lakers-logo.png'
    }
  };

  var getTeamData = function(team) {
    teamService.getTeamData(team)
    .then(
      function(result) {
        teams[team].teamData = result; //this teamData object is NOT the same as the teamData method on the 'teams' state resolve that is passed into the 'teamCtrl' controller, even though both use 'teamService' to obtain their data from parse.
      }
    );
  };

  this.getAllTeamData = function() {
    getTeamData('utahjazz');
    getTeamData('losangeleslakers');
    getTeamData('miamiheat');
    return teams;
  };
});
