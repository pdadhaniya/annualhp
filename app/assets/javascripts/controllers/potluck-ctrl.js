app.controller('PotluckCtrl', ['$scope', '$location', 'User',
  function($scope, $location, User){
    $scope.response = true;
    $scope.user = User.currentUser.get();
    $scope.user.$promise.then(function(data){
      $scope.potluckStatus = data.potluck;
      if (data.potluck !== null) {
        $scope.response = false;
        $scope.update = true;
      }
    });
    $scope.seeForm = function() {
      $scope.response = true;
      $scope.update = false;
    };
    $scope.allUsers = User.allUsers.query();
    $scope.updatePotluck = function(food){
      User.allUsers.update(food).$promise.then(function(){
        $scope.allUsers = User.allUsers.query();
        $scope.response = false;
        $scope.update = true;
      });      
    }
  }]);