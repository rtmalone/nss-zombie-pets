(function(){
  'use strict';

  angular.module('zombie-pets', [])
  .controller('MainController', ['$scope', function($scope){

    $scope.title = 'Zombie Pets';

    $scope.weapon = {};
    $scope.weapons = [];
    $scope.pet = {health:100};
    $scope.pets = [];

    $scope.player1 = null;
    $scope.player2 = null;

    $scope.showCage = function(){
      if ($scope.player1) {
        return true;
      }
    };

    $scope.setPlayer = function(num){
      $scope['player' + num] = this.p; // << Pet which was just clicked on.
    };

    $scope.toggleWeapon = function(){
      $scope.hideWeapon = !!!$scope.hideWeapon;
    };

    $scope.togglePet = function(){
      $scope.hidePet = !!!$scope.hidePet;
    };

    $scope.addWeapon = function(){
      //var w = $scope.weapon;
      $scope.weapons.push($scope.weapon);
      $scope.weapon = {};
      $('#name').focus();
    };

    $scope.addPet = function(){
      var index = $scope.pet.weapon * 1;
      $scope.pet.weapon = $scope.weapons[index];
      $scope.pets.push($scope.pet);
      $scope.pet = {health:100};
    };

  }]);
})();
