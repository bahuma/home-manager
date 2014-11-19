app.controller('TasksCtrl', ['$scope', function($scope) {
    $scope.users = [
        {
            _id: 'kerstin',
            name: "Kerstin",
            taskGroup: 'ghw'
        },
        {
            _id: 'flo',
            name: "Flo",
            taskGroup: 'k',
            fixedTasks: [
                "Käsebrot"    
            ]
        },
        {
            _id: 'max',
            name: "Max",
            taskGroup: 'ark',
            fixedTasks: [
                "Papier",
                "test"
            ]
        },
    ];
    
    $scope.taskGroups = [
      {
        _id: 'ghw',
        order: 0,
        tasks: [
            'Geschirrspüler',
            'Hund',
            'Wäsche'
        ]
      },
      {
        _id: 'k',
        order: 1,
        tasks: [
            'Kompost'
        ]
      },
      {
        _id: 'ark',
        order: 2,
        tasks: [
            'Altglas',
            'Restmüll',
            'Kehrdienst'
        ]
      }
    ];
    
    $scope.getTasksFromGroup = function(id) {
        var i;
        
        for(i = 0; i < $scope.taskGroups.length; ++i) {
            if($scope.taskGroups[i]._id == id)
                return $scope.taskGroups[i];    
        }
    };
}]);