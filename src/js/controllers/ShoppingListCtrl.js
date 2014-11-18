app.controller('ShoppingListCtrl', ['$scope', '$mdDialog', function($scope, $mdDialog) {
    $scope.items = [
        "Käse",
        "Milch",
        "Eier",
        "Klopapier"
    ];
    
    $scope.removeItem = function (id) {
        console.log(id);
        
        $scope.items.splice(id, 1);
    }
    
    $scope.showAddDialog = function($event) {
        $mdDialog.show({
          targetEvent: $event,
          templateUrl: 'templates/dialog-shoppinglist-add.html',
          controller: 'DialogShoppinglistAddCtrl'
        })
        .then(function(itemName) {
            $scope.items.push(itemName);
        });
    }
}]);