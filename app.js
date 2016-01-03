var reunionTour = angular.module('reunionTour', ['ui.router']);

// reunionTour.controller('rt-ctrl', function($scope){
// 	$scope.message = "Reunion Tour 2016!!";
// });

reunionTour.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/');

	$stateProvider

	.state('home', {
		url: '/',
		templateUrl: 'modules/home/home.html'
	})

	.state('games', {
		url: '/games',
		templateUrl: 'modules/games/games.html'
	})

	.state('hotel', {
		url: '/hotel',
		templateUrl: 'modules/hotel/hotel'
	})

	.state('rsvp', {
		url: '/rsvp',
		templateUrl: 'modules/rsvp/rsvp'
	})
});