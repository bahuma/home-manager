app.controller('BottomSheetShoppinglistCtrl', ['$scope', '$mdBottomSheet', function($scope, $mdBottomSheet) {
    $scope.items = [
        { name: 'mail', icon: 'img/mail.svg' }
    ];
    
    $scope.listItemClick = function($index) {
        var clickedItem = $scope.items[$index];
        $mdBottomSheet.hide(clickedItem);
    };
}]);