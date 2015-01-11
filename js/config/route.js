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
        .when('/settings', {
            templateUrl: "templates/settings.html",
            controller: "SettingsCtrl"
        })
        .otherwise({
            redirectTo: "/home"
        });
}]);