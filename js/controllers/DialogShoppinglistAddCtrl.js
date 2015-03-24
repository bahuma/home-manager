app.controller('DialogShoppinglistAddCtrl', ['$scope', '$mdDialog', 'HomeManagerApi', '$q', '$http', function($scope, $mdDialog, HomeManagerApi, $q, $http) {
    $scope.itemName = "";
    $scope.selectedItem = "";
    $scope.searchText = "";
    
    $scope.saveItem = function() {
        if ($scope.itemName !== "")
            $mdDialog.hide($scope.itemName);
    };
    $scope.closeDialog = function() {
        $mdDialog.hide(false);
    }
    $scope.querySearch = function(searchText) {
        var deferred = $q.defer();
        
        HomeManagerApi.shoppinglist.search(searchText).success(function(data) {
            deferred.resolve(data)
        });
        
        return deferred.promise;
    }
}]);