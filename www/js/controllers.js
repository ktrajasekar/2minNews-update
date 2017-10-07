var apps = angular.module('starter.controllers', [])

apps.controller('AppCtrl', function($scope, $ionicModal, $timeout, $http, servicesreturn) {
  servicesreturn.categoriesData()
    .then(function (response) {
        $scope.categories = response.data;
    }, function (error) {
        $scope.status = 'Error Retrieving Data! ' + error.message;
    });
})
apps.controller('postPage', function($scope, $ionicModal, $timeout, $http, $stateParams, $state, servicesreturn) {
        $scope.loading = true;
        console.log($state.params.postID);
        $scope.postIDvalue= $state.params.postID
        servicesreturn.postdetails($scope.postIDvalue).
        then(function(res){
          $scope.postData = res.data;
        }).finally(function(){
          $scope.loading = false;
        });
})

apps.controller('deviceStatusCtrl', function($ionicPlatform, $scope, $cordovaDevice, $cordovaNetwork) {
    $ionicPlatform.ready(function() {
            var device = $cordovaDevice.getDevice();
            $scope.manufacturer = device.manufacturer;
            $scope.platform = device.platform;
            $scope.uuid = device.uuid;
            // Network Plugin
           $scope.type = $cordovaNetwork.getNetwork()
           $scope.isOnline = $cordovaNetwork.isOnline()
            $scope.isOffline = $cordovaNetwork.isOffline()
  });
})
