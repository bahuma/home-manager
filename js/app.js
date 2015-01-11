var app = angular.module("HomePlanner", [
    'gapi', 
    'ngRoute',
    'pascalprecht.translate',
    'ngAnimate', 
    'ngMaterial', 
    'angular-flexslider'
]);

app.value('GoogleApp', {
    apiKey: 'JYMy1-rQXJXmZb18jHW_TYjQ',
    clientId: '673213156924-vllvdlcsf54v5p6fac7qlrllrjj3m0c1.apps.googleusercontent.com',
    scopes: [
      'https://www.googleapis.com/auth/calendar',
      'https://www.googleapis.com/auth/userinfo.profile'
    ]
});

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
        .when('/calendar', {
        	templateUrl: "templates/calendar.html",
        	controller: "CalendarCtrl"
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

app.config(['$translateProvider', function($translateProvider) {
    $translateProvider.useStaticFilesLoader({
        prefix: '/translations/',
        suffix: '.json'
    });
    
    // $translateProvider.useLocalStorage();
    
    $translateProvider.preferredLanguage('de');
}]);