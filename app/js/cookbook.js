var cookbookApp = angular.module('cookbookApp', []);

cookbookApp.controller('CookbookCtrl', function ($scope, $http) {
  $http.get('data/index.json').success(function(data) {
    $scope.recipes = data;
  });
  $scope.view = function(name) {
    $http.get('data/'+name+'.json')
      .success(function(data) {
        $scope.recipe = data;
      })
      .error(function() {
        alert('Error loading recipe');
      });
  }
});
