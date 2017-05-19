app.controller('toDoListController', function ($scope){
    
    $scope.appTitle = "Lista TODO";
    $scope.doneTaskLink = "Sprawdź wykonane zadania";
    $scope.listTaskLink = "Powrót do aktualnych zadań";
    $scope.deleteTask = "Usuń";
    $scope.setAsDone = "Zrobione";
    $scope.setAsToDo = "Do zrobienia";
    $scope.addNewTask = "Dodaj nowe zadanie";
    $scope.saveTaskButton = "Zapisz zadanie";
    $scope.taskNamePlaceholder = "Nazwa zadania";
    $scope.taskDescriptionPlaceholder = "Opis zadania";
    
    $scope.savedTasks = localStorage.getItem('taskList');
    
    $scope.taskList = (localStorage.getItem('taskList')!==null) ? JSON.parse($scope.savedTasks) : [ {name: 'Zrobić pranie', desc: 'Trzeba wyprać odświętne ubrania, bo święta, święta i po świętach', done: 0}, {name: 'Wynieść śmieci', desc: 'Tym razem pamiętać o kluczu do wiaty!', done: 1}, {name: 'Remont', desc: 'Pomalować kuchnię i salon', done: 0} ];
    
    localStorage.setItem('taskList', JSON.stringify($scope.taskList));
    
    $scope.cleanTask = function() {
        $scope.taskName = '';
        $scope.taskDesc = '';
    }
    
    $scope.addTask = function() {
        $scope.taskList.push({
            name: $scope.taskName,
            desc: $scope.taskDesc,
            done: 0
        });
        $scope.cleanTask();
        localStorage.setItem('taskList', JSON.stringify($scope.taskList));
    };
});