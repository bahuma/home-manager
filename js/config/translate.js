app.config(['$translateProvider', function($translateProvider) {
    $translateProvider.useStaticFilesLoader({
        prefix: '/translations/',
        suffix: '.json'
    });
    
    // $translateProvider.useLocalStorage();
    
    $translateProvider.preferredLanguage('de');
}]);