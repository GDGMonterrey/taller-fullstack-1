var app = angular.module('pokeApp',[]);

app.controller('HomeController', ['$http', function($http) {
  var _this = this;
  _this.message = "Vamo a calmaro";
  $http.get("api/pokemon").then(function(response) {
    _this.pokemons = response.data;
   }, function(error) {
    _this.pokemons = []
  });
}]);

app.factory('Pokeio', ['$http', '$q', function($http, $q) {
  var service = {};
  service.get = function(url) {
    var defer = $q.defer();
    $http.get("api/" + url).then(function(response) {
      return defer.resolve(response.data);
     }, function(error) {
      return defer.reject(error);
    });
    return defer.promise;
  };
  return service;
}]);