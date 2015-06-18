angular
.module('ch8App')
.controller('StudentsCtrl', function ($rootScope, StudentsFactory){

  $rootScope.students = StudentsFactory
})
