app.controller('PotluckCtrl', ['$scope', '$location', 'User',
  function($scope, $location, User){
    $scope.response = true;
    $scope.user = User.currentUser.get();
    $scope.user.$promise.then(function(data){
      if (data.potluck !== null) {
        $scope.update = true;
        $scope.response = false;
      }
    });
    $scope.allUsers = User.allUsers.query();
    $scope.allUsers.$promise.then(function(data){
      var yesArray = [];
      for (var x = 0; x < data.length; x++) {
        if (data[x].rsvp === "Yes") {
          yesArray.push(data[x]);
        }
      }
      $scope.attendees = yesArray;
      console.log($scope.attendees);
    })
    $scope.seeForm = function() {
      $scope.response = true;
      $scope.update = false;
    };
    $scope.cancel = function() {
      $scope.update = true;
      $scope.response = false;
    }
    $scope.updatePotluck = function(food){
      User.allUsers.update(food).$promise.then(function(){
        $scope.allUsers = User.allUsers.query();
        $scope.allUsers.$promise.then(function(data){
          var yesArray = [];
          for (var x = 0; x < data.length; x++) {
            if (data[x].rsvp === "Yes") {
              yesArray.push(data[x]);
            }
          }
          $scope.attendees = yesArray;
          console.log($scope.attendees);
        })
        $scope.update = true;
        $scope.response = false;
      });      
    }
  }]);