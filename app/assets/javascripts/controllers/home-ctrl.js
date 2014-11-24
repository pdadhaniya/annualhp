app.controller('HomeCtrl', ['$scope', '$location', 'User',
  function($scope, $location, User){
    $scope.user = User.currentUser;
    $scope.loggedin = true;
    $scope.user.$promise.then(function(data){
      if ($scope.user.google_uid) {
        $scope.loggedin = false
      }
    })
    $scope.startStudying = function() {
      $location.path('/menu');
    };
  }]);