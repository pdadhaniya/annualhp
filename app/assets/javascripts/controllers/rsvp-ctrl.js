app.controller('RSVPCtrl', ['$scope', '$location', 'User',
  function($scope, $location, User){
    $scope.response = false;
    $scope.user = User.currentUser.get();
    $scope.user.$promise.then(function(data){
      $scope.rsvpStatus = data.rsvp;
      if ($scope.rsvpStatus === null) {
        $scope.response = true;
      }
    });
    $scope.allUsers = User.allUsers.query();
    $scope.updateRSVP = function(status){
      User.allUsers.update(status).$promise.then(function(){
        $scope.allUsers = User.allUsers.query();
      });      
    }
  }]);