var app = angular.module('studentsApp', ['ngRoute']);




app.controller('StudentController', ['$scope', 'dataService',
    function ($scope, dataService) {
        $scope.status;
        $scope.students;

        getStudents();

        function getStudents() {
            dataService.getStudents()
                .success(function (students) {
                    $scope.students = students;
                })
                .error(function (error) {
                    $scope.status = 'Unable to load customer data: ' + error.message;
                });
        }
    }
])




app.service('dataService', ['$http', function($http) {
    var urlBase = '/students';

    this.getStudents = function() {
        return $http.get(urlBase);
    };

    this.getStudent = function(id) {
        return $http.get(urlBase + '/' + id);
    };

    this.addStudent = function(student) {
        return $http.post(student);
    };

    this.updateStudent = function(student) {
        return $http.put(urlBase + '/' + student.id, student)
    };

    this.deleteStudent = function(id) {
        return $http.delete(urlBase + '/' + id);
    };

}]);