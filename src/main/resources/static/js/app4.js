/**
 * Created by sean on 11/29/14.
 */

var app = angular.module('app', []);

app.service('StudentService', function() {
    //to create unique student id
    var uid = 1;

    //students array to hold list of all students
    var students = [{
        'id': 0,
        'firstName': 'Sean',
        'lastName': 'Livingston'
    }];

    //save method create a new student if does not already exist
    //else update the existing object
    this.save = function(student) {
        if (student.id == null) {
            //if this is a new student, add it to students array
            student.id = uid++;
            students.push(student);
        } else {
            //for existing student, find this student using id
            //and update it
            for (i in students) {
                if (students[i].id == student.id) {
                    students[i] = student;
                }
            }
        }
    }

    //simply search students list for given id
    //and returns the student object if found
    this.get = function(id) {
        for (i in students) {
            if (students[i].id == id) {
                return students[i];
            }
        }
    }

    //iterate through contacts list and delete
    //contact if found
    this.delete = function(id) {
       for (i in students) {
          if (students[i].id == id) {
                   students.splice(i, 1);
          }
       }
    }

    this.list = function() {
        return students;
    }

});

app.controller('StudentController', function($scope, StudentService) {
    $scope.students = StudentService.list();

    $scope.saveStudent = function() {
        StudentService.save($scope.newStudent);
        $scope.newStudent = {};
    }

    $scope.delete = function(id) {
        StudentService.delete(id);
        if ($scope.newStudent.id == id) $scope.newStudent = {};
    }

    $scope.edit = function(id) {
        $scope.newStudent = angular.copy(StudentService.get(id));
    }
})
