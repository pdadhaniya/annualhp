app.factory('User', ['$resource',
  function($resource) {
    var userRsc = $resource('/api/current-user');
    var users = $resource('/users');
    return {
      currentUser: userRsc.get(),
      allUsers: users.query()
    };
  }]);