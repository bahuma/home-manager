app.controller('SidebarCtrl', function($scope, $mdSidenav) {
  $scope.toggleSidebar = function() {
  	console.log("clicked");
    $mdSidenav('left').toggle();
  };
});