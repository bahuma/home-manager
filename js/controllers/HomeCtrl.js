app.controller("HomeCtrl", ['$scope', 'HomeManagerApi', function($scope, HomeManagerApi) {
    
    HomeManagerApi.common.getHomeImage().success(function(data) {
        $scope.image = data[0].value;
    });
    
    HomeManagerApi.common.getHomeMessage().success(function(data) {
        $scope.message = data[0].value;
    });
}]);