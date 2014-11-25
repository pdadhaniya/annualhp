app.controller('RSVPCtrl', ['$scope', '$location', 'User',
  function($scope, $location, User){
    $scope.user = User.currentUser;
    $scope.allUsers = User.allUsers;
  }]);