app.controller('DialogShoppinglistAddCtrl', ['$scope', '$mdDialog', function($scope, $mdDialog) {
    $scope.itemName = "";
    
    $scope.closeDialog = function() {
        $mdDialog.hide($scope.itemName);
    };
}]);