app.factory('User', ['$resource',
  function($resource) {
    var userRsc = $resource('/api/current-user');
    var users = $resource(
      '/users/:id',
      {id: '@id'},
      {update: {method: "PATCH"}}
    );
    var usersArray = users.query();
    var attendees = function() {
      var yes = [];
      for (var x = 0; x < usersArray.length; x++) {
        if (usersArray[x].rsvp === "Yes") {
          yes.push(usersArray[x]);
        }
      }
      return yes;
    }
    return {
      currentUser: userRsc,
      allUsers: users,
      attendees: attendees
    };
  }]);