app.controller('CalendarCtrl', function($scope, Calendar, GAPI) {
    
    $scope.authorize = function() {
        GAPI.init();
    };
    
    $scope.getCalendarList = function() {
        Calendar.getCalendarList().then(function(data) {
            console.log(data)
        });
    }
    
    console.log($scope.videos);
});