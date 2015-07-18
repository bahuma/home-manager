app.controller('BottomSheetShoppinglistCtrl', ['$scope', '$mdBottomSheet', '$filter', function($scope, $mdBottomSheet, $filter) {
    $scope.items = [
        {
            id: 'mail',
            name: $filter('translate')('MAIL'),
            icon: 'mail'
        }
    ];
    
    $scope.listItemClick = function($index) {
        var clickedItem = $scope.items[$index];
        $mdBottomSheet.hide(clickedItem.id);
    };
}]);