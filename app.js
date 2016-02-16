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

	.state('fun', {
		url: '/fun',
		templateUrl: 'modules/fun/fun.html'
	})

	.state('stay', {
		url: '/stay',
		templateUrl: 'modules/stay/stay.html'
	})

	.state('rsvp', {
		url: '/rsvp',
		templateUrl: 'modules/rsvp/rsvp.html'
	})
});