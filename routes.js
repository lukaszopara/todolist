app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/done', {
                templateUrl: 'done.html',
                controller: 'toDoListController'
            }, null)
            .otherwise({
                templateUrl: 'list.html',
                controller: 'toDoListController'
            }, null);
    }]);