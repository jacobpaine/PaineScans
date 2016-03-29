angular.module('starter', ['ionic','ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('home',{
    url:'/home',
    templateUrl: 'views/home.html',
    controller: 'HomeCtrl'
  });
  $urlRouterProvider.otherwise('/home');
})


.config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    // Allow same origin resource loads.
    'self',
    // Allow loading from our assets domain.  Notice the difference between * and **.
    'http://10.**',
    'http://192.168.**',
    'https://obscure-waters-34258.herokuapp.com/**'
  ]);
})


.controller('HomeCtrl', ['$http', '$scope','$cordovaBarcodeScanner','$ionicPlatform',function($http, $scope, $cordovaBarcodeScanner, $ionicPlatform) {
  $scope.action = 'http://10.0.0.89:3000/books';
  $scope.scan = function(){
    $ionicPlatform.ready(function() {
      $cordovaBarcodeScanner.scan().then(function(result) {

      var apikey = 'oe7lmq69cf9hflll';
      var isbn = result.text;
      var jsonEncoding= '&encoding=json';
      var url = 'http://api.trove.nla.gov.au/result?q='+ isbn +'&zone=all&key='+ apikey + jsonEncoding;
        $http({
          method: 'GET',
          url:url
          })
        .then(function(response) {
            $scope.response = response;
          }, function(error) {
            alert(JSON.stringify(error))
          });
      });
    });
  }
}]);