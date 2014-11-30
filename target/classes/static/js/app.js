var app = angular.module('studentsApp', ['ngResource']);

app.factory('Student', function($resource) {
    return $resource("/students/:id", {id: "@id"}, {
        update: {
            method: 'PUT'
        }
    });
});

app.controller('StudentController', function($scope, Student) {

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
