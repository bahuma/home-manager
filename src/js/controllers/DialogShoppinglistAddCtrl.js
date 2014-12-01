app.controller('DialogShoppinglistAddCtrl', ['$scope', '$mdDialog', function($scope, $mdDialog) {
    $scope.itemName = "";
    
    $scope.saveItem = function() {
        if ($scope.itemName !== "")
            $mdDialog.hide($scope.itemName);
    };
    $scope.closeDialog = function() {
        $mdDialog.hide(false);
    }
}]);