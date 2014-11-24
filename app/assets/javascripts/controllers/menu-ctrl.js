app.controller('MenuCtrl', ['$scope', '$location', 'User',
  function($scope, $location, User) {
    $scope.user = User.currentUser;
    $scope.startTop100 = function() {
      $location.path('/top100');
    }
  }])