var cookbookApp = angular.module('cookbookApp', []);

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
});
