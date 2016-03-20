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


.controller('HomeCtrl', ['$http', '$scope','$cordovaBarcodeScanner','$ionicPlatform',function($http, $scope, $cordovaBarcodeScanner, $ionicPlatform) {

// http://api.trove.nla.gov.au/result?q=9780385487429&zone=all&key=oe7lmq69cf9hflll&encoding=json

  $scope.scan = function(){
    $ionicPlatform.ready(function() {
      $cordovaBarcodeScanner.scan().then(function(result) {

      var apikey = 'oe7lmq69cf9hflll';
      var isbn = result.text;
      var jsonEncoding= '&encoding=json';
      var url = 'http://api.trove.nla.gov.au/result?q='+ isbn +'&zone=all&key='+ apikey + jsonEncoding;
//$http.get('/someUrl', config).then(successCallback, errorCallback);
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