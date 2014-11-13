var app = angular.module("HomePlanner", ['ngRoute', 'ngAnimate', 'ngMaterial']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: "templates/home.html",
            controller: "HomeCtrl"
        })
        .otherwise({
            redirectTo: "/home"
        });
}]);