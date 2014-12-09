app.controller('DialogShoppinglistAddCtrl', ['$scope', '$mdDialog', 'HomeManagerApi', function($scope, $mdDialog, HomeManagerApi) {
    $scope.itemName = "";
    $scope.autocompleteItems = [];
    
    $scope.saveItem = function() {
        if ($scope.itemName !== "")
            $mdDialog.hide($scope.itemName);
    };
    $scope.closeDialog = function() {
        $mdDialog.hide(false);
    }
    $scope.autocomplete = function() {
        if ($scope.itemName != "") {
            HomeManagerApi.shoppinglist.search($scope.itemName).success(function(data) {
               $scope.autocompleteItems = data; 
            });
        } else {
            $scope.autocompleteItems = "";
        }
    }
    $scope.setItemName = function(val) {
        $scope.itemName = val;
        $scope.autocompleteItems = [];
    }
}]);