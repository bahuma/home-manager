app.controller('ShoppingListCtrl', ['$scope', 'HomeManagerApi', '$mdDialog', function($scope, HomeManagerApi, $mdDialog) {
    $scope.loadItems = function () {
        HomeManagerApi.shoppinglist.getAllItems().success(function(data){
            $scope.items = data;
        }); 
    }
    
    $scope.removeItem = function (index) {
        
        HomeManagerApi.shoppinglist.deleteItem($scope.items[index]._id)
        
        $scope.items.splice(index, 1);
    }
    
    $scope.showAddDialog = function($event) {
        $mdDialog.show({
          targetEvent: $event,
          templateUrl: 'templates/dialog-shoppinglist-add.html',
          controller: 'DialogShoppinglistAddCtrl'
        })
        .then(function(itemName) {
            if (itemName) {
                HomeManagerApi.shoppinglist.createItem(itemName).success(function(data) {
                    $scope.items.push(data.createdObject);    
                });
            }
        });
    }
    
    
    // Startup
    $scope.loadItems();
}]);