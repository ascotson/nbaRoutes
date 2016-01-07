var app = angular.module('nbaRoutes');

app.service('teamService', function ($http, $q) {

  this.addNewGame = function(gameObj) {
    var url = 'https://api.parse.com/1/classes/' + gameObj.homeTeam;
    if(parseInt(gameObj.homeTeamScore) > parseInt(gameObj.opponentScore)) {
      gameObj.won = true;
    }
    else {
      gameObj.won = false;
      }
    return $http({
      method: 'POST',
      URL: url,
      data: gameObj
    }).then(function(result) {
      return result;
    });
  };

  this.getTeamData = function(team) {
    var deferred = $q.defer();
    var url = 'https://api.parse.com/1/classes/' + team;
    $http({
      method: 'GET',
      URL: url,
    }).then(function(data) {
      var results = data.data.results;
      var wins = 0;
      var losses = 0;
      for(var i = 0; i < results.length; i++) {
        if(results[i].won) {
          wins += 1;
        } else {
          losses += 1;
        }
      }
      results.wins = wins;
      results.losses = losses;
      deferred.resolve(results);
    });
    return deferred.promise;
  };
});
