app.controller('SettingsCtrl', ['$scope', 'AppConfig', function($scope, AppConfig) {
    $scope.config = AppConfig;
}]);