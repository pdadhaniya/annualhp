app.factory('User', ['$resource',
  function($resource) {
    var userRsc = $resource('/api/current-user');
    var users = $resource(
      '/users/:id',
      {id: '@id'},
      {update: {method: "PATCH"}}
    );
    return {
      currentUser: userRsc,
      allUsers: users
    };
  }]);