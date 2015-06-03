angular
.module('ch8App')
.controller('SkillsCtrl', function ($rootScope, SkillsFactory){

  $rootScope.skills = SkillsFactory
})
