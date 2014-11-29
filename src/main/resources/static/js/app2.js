var app = angular.module('studentsApp', ['ngRoute']);


//Define Routing for app
//Uri /AddNewStudent -> template add_student.html and Controller AddStudentController
//Uri /ShowStudents -> template show_students.html and Controller ShowStudentsController


app.service('MyService', function() {
    this.method1 = function() {

    }

    this.method2 = function() {

    }
});

app.factory('MyFactory', function() {
    var factory = {};
    factory.method1 = function() {

    }

    factory.method2 = function() {

    }
});



app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/addStudent', {
                templateUrl: 'add_student.html',
                controller: 'CommonController',
                footdata: 'addstudent',
                message: 'This is add Student Screen'
            }).
            when('/showStudents', {
                templateUrl: 'show_students.html',
                controller: 'CommonController',
                footdata: 'showstudent',
                message: 'This is show student Screen'
            }).
            when('/showStudent/:studentId', {
                templateUrl: 'show_student.html',
                controller: 'ShowStudentDetailsController'
            }).
            otherwise({
                redirectTo: 'addStudent'
            });
    }
]);


app.controller('CommonController', function($scope, $route) {

    $scope.foo = $route.current.footdata;
    $scope.tellMe = $route.current.message;
});

app.controller('ShowStudentsController', function($scope) {

    $scope.message = "This is the Show Students Screen";
});

app.controller('ShowStudentDetailsController', function($scope, $routeParams) {
    $scope.student_id = $routeParams.studentId;
});


//app.controller('StudentController', ['$scope', function ($scope) {
//    var uid = 1;
//
//    $scope.students = [
//        {id:0,
//        'firstName': 'Sean',
//        'lastName': 'Livingston'
//        }
//    ];
//
//    $scope.saveStudent = function() {
//
//        if($scope.newStudent.id == null) {
//            $scope.newStudent.id = uid++;
//            $scope.students.push($scope.newStudent);
//
//        } else {
//            for(i in $scope.students) {
//                if($scope.students[i].id == $scope.newStudent.id) {
//                    $scope.students[i] = $scope.newStudent;
//                }
//            }
//        }
//        $scope.newStudent = {};
//    }
//
//    $scope.add = function() {
//        $scope.students.push($scope.newStudent);
//        $scope.newStudent = "";
//    }
//
//    $scope.delete = function(id) {
//        for(i in $scope.students) {
//            if($scope.students[i].id == id) {
//                $scope.students.splice(i, 1);
//                $scope.newStudent = {};
//            }
//        }
//    }
//
//    $scope.edit = function(id) {
//        for(i in $scope.students) {
//            if($scope.students[i].id == id) {
//                $scope.newStudent = angular.copy($scope.students[i]);
//            }
//        }
//    }
//}]);