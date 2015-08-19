/**
 * Created by linhehe on 15/8/16.
 */
var app = angular.module('LinheheBlog', ['ui.router','ui.bootstrap']);

app.config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: '/home.html',
                controller: 'HomeCtrl'
            })
            .state('picture', {
                url: '/picture',
                templateUrl: '/picture.html',
                controller: 'PictureCtrl'
            });

        $urlRouterProvider.otherwise('home');
    }]);

app.controller('HomeCtrl', function($scope){
    //
    $scope.myInterval = 3000;
    $scope.slides = [
        {
            image: 'http://lorempixel.com/400/200/'
        },
        {
            image: 'http://lorempixel.com/400/200/food'
        },
        {
            image: 'http://lorempixel.com/400/200/sports'
        },
        {
            image: 'http://lorempixel.com/400/200/people'
        }
    ];
});