app.controller('HomeCtrl', ['$scope', '$location', 'User',
  function($scope, $location, User){
    $scope.user = User.currentUser.get();
    $scope.loggedin = true;
    $scope.user.$promise.then(function(data){
      if ($scope.user.google_uid) {
        $scope.loggedin = false
      }
    })
    $scope.seeRSVP = function() {
      $location.path('/rsvp');
    };
    $scope.seePotluck = function() {
      $location.path('/potluck');
    }
  }]);