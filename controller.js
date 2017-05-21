app.controller('toDoListController', function ($scope) {

    $scope.appTitle = "Lista TODO";
    $scope.deleteDoneTask = "Usuń wykonane zadania";
    $scope.addNewTask = "Dodaj nowe zadanie";
    $scope.saveTaskButton = "Zapisz";
    $scope.taskNamePlaceholder = "Nazwa zadania";
    $scope.taskDescriptionPlaceholder = "Opis zadania";
    
    $scope.savedTasks = localStorage.getItem('taskList');
    
    $scope.taskList = (localStorage.getItem('taskList') !== null) ? JSON.parse($scope.savedTasks) : [{
        name: 'Zjeść obiad na szczycie Mont Blanc',
        done: 0
    }, {
        name: 'Otworzyć rano oczy',
        done: 1
    }, {
        name: 'Przybić piątkę z rekinem w jego naturalnym środowisku',
        done: 0
    }];

    $scope.saveLocalData = function () {
        localStorage.setItem('taskList', JSON.stringify($scope.taskList));
    }

    $scope.saveLocalData();

    $scope.addTask = function () {
        $scope.taskList.push({
            name: $scope.taskName,
            done: 0
        });
        $scope.taskName = '';
        $scope.saveLocalData();
    };

    $scope.delete = function () {
        var oldList = $scope.taskList;
        $scope.taskList = [];
        angular.forEach(oldList, function (item) {
            if (!item.done)
                $scope.taskList.push(item);
        });
        $scope.saveLocalData();
    }
});