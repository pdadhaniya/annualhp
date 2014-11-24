app.controller('Top100Ctrl', ['$scope', 'User', 'Top100',
  function($scope, User, Top100) {
    $scope.user = User.currentUser;
    $scope.material = Top100.content.query();
  }]);