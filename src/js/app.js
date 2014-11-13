var app = angular.module("HomePlanner", ['ngRoute', 'ngAnimate', 'ngMaterial']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: "templates/home.html",
            controller: "HomeCtrl"
        })
        .when('/shoppinglist', {
        		templateUrl: "templates/shoppinglist.html",
        		controller: "ShoppingListCtrl"
        })
        .when('/tasks', {
        		templateUrl: "templates/tasks.html",
        		controller: "TasksCtrl"
        })
        .otherwise({
            redirectTo: "/home"
        });
}]);