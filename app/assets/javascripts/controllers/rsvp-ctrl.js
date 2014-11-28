app.controller('RSVPCtrl', ['$scope', '$location', 'User',
  function($scope, $location, User){
    $scope.response = true;
    $scope.user = User.currentUser.get();
    $scope.user.$promise.then(function(data){
      if (data.rsp !== null) {
        $scope.update = true;
        $scope.response = false;
      }
    });
    $scope.allUsers = User.allUsers.query();
    $scope.seeForm = function() {
      $scope.response = true;
      $scope.update = false;
    }
    $scope.cancel = function() {
      $scope.update = true;
      $scope.response = false;
    }
    $scope.updateRSVP = function(status){
      User.allUsers.update(status).$promise.then(function(){
        $scope.allUsers = User.allUsers.query();
        $scope.update = true;
        $scope.response = false;
      });      
    }
  }]);