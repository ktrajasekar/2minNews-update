var apps = angular.module('starter.controllers', ['ionic', 'ngCordova'])

apps.controller('AppCtrl', function ($scope, $ionicModal, $timeout, servicesreturn) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function (modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function () {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function () {
    $scope.modal.show();
  };

  servicesreturn.categoriesData()
    .then(function (response) {
      $scope.categories = response.data;
    }, function (error) {
      $scope.status = 'Error Retrieving Data! ' + error.message;
    });

  // Perform the login action when the user submits the login form
  $scope.doLogin = function () {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function () {
      $scope.closeLogin();
    }, 1000);
  };
})


apps.controller('postPage', function ($scope, $ionicModal, $timeout, $http, $stateParams,  $cordovaSocialSharing, $state, servicesreturn) {
  $scope.loading = true;
  console.log($state.params.id);
  
  $scope.postIDvalue = $state.params.id;
  if ($scope.postIDvalue == '' || $scope.postIDvalue == undefined) {
    $scope.postIDvalue = '';
  }

  // Get Post Data from Factory
  servicesreturn.onlyCategoryPost($stateParams.id)
    .then(function (datas) {
      $scope.postData = datas.data;
      console.log(datas);
    }).finally(function () {
      $scope.loading = false;
    });

//

servicesreturn.featuredImage($stateParams.id)
.then(function (datas) {
  $scope.images = datas.data;
  console.log(datas);
}).finally(function () {
  $scope.loading = false;
});

// $cordovaSocialSharing
// .share(message, subject, file, link) // Share via native share sheet
// .then(function(result) {
//   // Success!
// }, function(err) {
//   // An error occured. Show a message to the user
// });



$scope.share = function (message, subject ) {
  $cordovaSocialSharing.share(message, subject, null, 'http://www.flashbulb.in');
}
});

apps.controller('PlaylistCtrl', function ($scope, $stateParams) {

});

