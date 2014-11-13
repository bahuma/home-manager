app.controller("HomeCtrl", ['$scope', '$http', function($scope, $http) {
    $scope.sidebar = function() {
        $scope.$parent.openSidebar();
    }
}]);