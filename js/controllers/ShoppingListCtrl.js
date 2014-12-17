app.controller('ShoppingListCtrl', ['$scope', 'HomeManagerApi', '$mdDialog', '$mdBottomSheet', '$mdToast', function($scope, HomeManagerApi, $mdDialog, $mdBottomSheet, $mdToast) {
    $scope.loadItems = function () {
        HomeManagerApi.shoppinglist.getAllItems().success(function(data){
            $scope.items = data;
        }); 
    }
    
    $scope.removeItem = function (index) {
        
        HomeManagerApi.shoppinglist.deleteItem($scope.items[index]._id)
        
        $scope.items.splice(index, 1);
    }
    
    $scope.sendMail = function() {
        $mdDialog.show({
          templateUrl: 'templates/dialog-shoppinglist-mail.html',
          controller: 'DialogShoppinglistMailCtrl'
        })
        .then(function(email) {
            if (email) {
                HomeManagerApi.shoppinglist.mail(email).success(function(data) {
                    if (data.sent) {
                        $mdToast.show($mdToast.simple().content(data.message));
                    }
                    else
                    {
                        $mdToast.show($mdToast.simple().content(data.message));
                        console.log(data.error)
                    }
                });
            }
        });
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
    
    $scope.showBottomSheet = function($event) {
        $mdBottomSheet.show({
            targetEvent: $event,
            templateUrl: 'templates/bottom-sheet-shoppinglist.html',
            controller: 'BottomSheetShoppinglistCtrl'
        }).then(function(data) {
            switch (data.name) {
                case 'mail':
                    $scope.sendMail();
                    break;
            }
        });
    }
    
    
    // Startup
    $scope.loadItems();
}]);