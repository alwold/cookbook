var cookbookApp = angular.module('cookbookApp', ['ngSanitize']);

cookbookApp.controller('CookbookCtrl', function ($scope, $http) {
  $http.get('data/index.json').success(function(data) {
    $scope.recipes = data;
  });
  $scope.view = function(file, name) {
    $http.get('data/'+file+'.json')
      .success(function(data) {
        $scope.recipe = data;
        $scope.name = name;
      })
      .error(function() {
        alert('Error loading recipe');
        delete $scope.recipe;
        delete $scope.name;
      });
  }
  $scope.formatAmount = function(amount) {
    if (typeof(amount) === 'number') {
      // see if it converts to a fraction
      if (amount === Math.floor(amount)) {
        return amount;
      } else if (String(amount).indexOf('0.333') === 0) {
        return '1/3';
      } else if (String(amount).indexOf('0.66') === 0) {
        return '2/3';
      } else if (amount * 4 === Math.floor(amount * 4)) {
        return amount * 4 + '/4';
      } else if (amount * 6 === Math.floor(amount * 6)) {
        return amount * 6 + '/6';
      } else if (amount * 8 === Math.floor(amount * 8)) {
        return amount * 8 + '/8';
      } else {
        return amount;
      }
    } else {
      return amount;
    }
  };
});
