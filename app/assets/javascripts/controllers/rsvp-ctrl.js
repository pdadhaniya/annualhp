app.controller('RSVPCtrl', ['$scope', '$location', 'User',
  function($scope, $location, User){
    $scope.response = true;
    $scope.user = User.currentUser.get();
    $scope.user.$promise.then(function(data){
      $scope.rsvpStatus = data.rsvp;
      if (data.rsp !== null) {
        $scope.response = false;
        $scope.update = true;
      }
    });
    $scope.seeForm = function() {
      $scope.response = true;
      $scope.update = false;
    }
    $scope.allUsers = User.allUsers.query();
    $scope.updateRSVP = function(status){
      User.allUsers.update(status).$promise.then(function(){
        $scope.allUsers = User.allUsers.query();
        $scope.response = false;
        $scope.update = true;
      });      
    }
  }]);