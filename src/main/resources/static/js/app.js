var app = angular.module('studentsApp', ['ngResource', 'ngRoute']);

app.factory('Student', function($resource) {
    return $resource("/students/:id", {id: "@id"}, {
        update: {
            method: 'PUT'
        }
    });
});

app.controller('StudentController', function($scope, Student, $route) {

    Student.query(function(data) {
        $scope.students = data;
    });

    Student.get({ id: 1 }, function(data) {
        $scope.student = data;
    });
    //var student = new Student.query();
    //
    //$scope.students = student;
    //console.log(student.get({'id': '1'}));
});

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/viewStudent',{
                templateUrl: 'student.html',
                controller: 'StudentController'
            }).
            otherwise({
                redirectTo: ''
            });
    }
]);
