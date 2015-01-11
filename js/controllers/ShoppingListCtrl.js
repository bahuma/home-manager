app.controller('ShoppingListCtrl', ['$scope', 'HomeManagerApi', '$mdDialog', '$mdBottomSheet', '$mdToast', '$filter', function($scope, HomeManagerApi, $mdDialog, $mdBottomSheet, $mdToast, $filter) {
    $scope.loadItems = function () {
        HomeManagerApi.shoppinglist.getAllItems().success(function(data){
            $scope.items = data;
        }); 
    }
    
    $scope.removeItem = function (index) {
        $scope.previousDeleted = $scope.items[index].name;
        
        HomeManagerApi.shoppinglist.deleteItem($scope.items[index]._id).success(function(data){
            console.log("deleted");
            var toast = $mdToast.simple()
                .content($filter('translate')('ITEM REMOVED'))
                .action($filter('translate')('UNDO'));
                
           $mdToast.show(toast).then(function(){
               addItem($scope.previousDeleted);
           });
        });
        
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
                addItem(itemName);
            }
        });
    }
    
    $scope.showBottomSheet = function($event) {
        $mdBottomSheet.show({
            targetEvent: $event,
            templateUrl: 'templates/bottom-sheet-shoppinglist.html',
            controller: 'BottomSheetShoppinglistCtrl'
        }).then(function(data) {
            switch (data) {
                case 'mail':
                    $scope.sendMail();
                    break;
            }
        });
    }
    
    var addItem = function(itemName) {
        HomeManagerApi.shoppinglist.createItem(itemName).success(function(data) {
            $scope.items.push(data.createdObject);    
        });
    }
    
    
    // Startup
    $scope.loadItems();
}]);