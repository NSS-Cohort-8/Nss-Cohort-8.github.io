angular
.module('ch8App')
.controller('StudentsCtrl', function ($scope, StudentsFactory){

  $scope.students = StudentsFactory
})
