angular.module('nbaRoutes')
  .service('teamService', function ($http, $q) {

  this.addNewGame = function(newGame) {
    var url = 'https://api.parse.com/1/classes/' + newGame.homeTeam;
    if(parseInt(newGame.homeTeamScore) > parseInt(newGame.opponentScore)) {
      newGame.won = true;
    }
    else {
      newGame.won = false;
      }
    return $http({
      method: 'POST',
      url: url,
      data: newGame
    });
  };

  this.getTeamData = function(team) {
    var deferred = $q.defer();
    var url = 'https://api.parse.com/1/classes/' + team;
    $http({
      method: 'GET',
      url: url
    }).then(function(data) {
      var results = data.data.results;
      var wins = 0;
      var losses = 0;
      for(var i = 0; i < results.length; i++) {
        if(results[i].won) {
          wins++;
        } else if(!results[i].won) {
          losses++;
        }
      }
      results.wins = wins;
      results.losses = losses;
      deferred.resolve(results);  //Is this the correct syntax for resolving our deferred object with the results array?
    },
    function(error) {
      deferred.reject(error);
    }
  );
    return deferred.promise;
  };
});
