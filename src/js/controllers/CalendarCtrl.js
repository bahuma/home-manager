app.controller('CalendarCtrl', function($scope, Calendar, GAPI) {
    $scope.calendars = [{summary: "test"}, {summary: "bla"}];
    
    
    $scope.authorize = function() {
        GAPI.init();
    };
    
    $scope.getCalendarList = function() {
        Calendar.getCalendarList().then(function(data) {
            $scope.calendars = data.items;
            
            console.log($scope.calendars);
        });
    };
});