apps.controller('homeCtrl', function($ionicPlatform,$http, $state, $scope, $stateParams, servicesreturn) {
    $scope.loading = true;
    console.log($stateParams.id)
        servicesreturn.categoriesData()
          .then(function (data) {
              $scope.orders = data;
          }, function (error) {
              $scope.status = 'Error Retrieving Data! ' + error.message;
          });
          // Get Post Data from Factory
        servicesreturn.onlyCategoryPost($stateParams.id)
        .then(function(datas){
          $scope.postData = datas.data;
          console.log(datas);
        }).finally(function(){
          $scope.loading = false;
        });
        $scope.postDetails = function(postid){
          console.log(postid);
          $state.go('app.postdetails',{postID: postid});
        }
  })