app.controller('DialogShoppinglistMailCtrl', ['$scope', '$mdDialog', function($scope, $mdDialog) {
    $scope.email = "";
    
    $scope.send = function() {
        if ($scope.email !== "")
            $mdDialog.hide($scope.email);
    };
    $scope.closeDialog = function() {
        $mdDialog.hide(false);
    }
}]);