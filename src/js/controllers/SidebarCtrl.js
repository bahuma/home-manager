app.controller('SidebarCtrl', ['$scope', '$mdSidenav', '$location', function($scope, $mdSidenav, $location) {
  $scope.toggleSidebar = function() {
  	$mdSidenav('left').toggle();
  };

  $scope.closeSidebar = function() {
  	$mdSidenav('left').close();
  }

  $scope.menuClass = function(page) {
    var current = $location.path().substring(1);
    return page === current ? "active md-primary" : "";
  };
}]);