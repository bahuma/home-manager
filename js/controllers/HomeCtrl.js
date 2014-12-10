app.controller("HomeCtrl", ['$scope', 'HomeManagerApi', function($scope, HomeManagerApi) {
    $scope.images = [];
    
    HomeManagerApi.home.getImages().success(function(data) {
        $scope.images = data;
    });
}]);