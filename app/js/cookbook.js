var cookbookApp = angular.module('cookbookApp', []);

cookbookApp.controller('CookbookCtrl', function ($scope, $http) {
  $http.get('data/shrimp-burgers.json').success(function(data) {
    $scope.recipe = data;
  });
});
