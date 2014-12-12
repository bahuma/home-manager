app.controller('SidebarCtrl', ['$scope', '$mdSidenav', '$location', function($scope, $mdSidenav, $location) {
	$scope.menuItems = [
		{
			href: "home",
			name: "Home"
		},
		{
			href: "calendar",
			name: "Calendar"
		},
		{
			href: "shoppinglist",
			name: "Shopping List"
		},
		{
			href: "tasks",
			name: "Tasks"
		},
		{
			href: "settings",
			name: "Settings"
		}
	];

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