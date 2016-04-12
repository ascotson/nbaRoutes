var app = angular.module('nbaRoutes', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

    $httpProvider.interceptors.push('httpRequestInterceptor');

    $stateProvider
      .state('home', {
        url: '/',
        controller: 'homeCtrl',
        templateUrl: 'js/home/homeTmpl.html'
      })

      .state('teams', {
        url: '/teams/:team',  //this creates the team property on the $stateParams object with the value from the ui-sref. Angular dynamically changes the value of $stateParams.team based on the user's click.
        controller: 'teamCtrl',
        templateUrl: 'js/teams/teamTmpl.html',
        resolve: {
          teamData: function($stateParams, teamService) {
            return teamService.getTeamData($stateParams.team);
          }
        }
      });

    $urlRouterProvider
      .otherwise('/');
});
