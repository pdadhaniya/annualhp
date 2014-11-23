app.factory('User', ['$resource',
  function($resource) {
    var userRsc = $resource('/api/current-user');
    return {
      currentUser: userRsc.get()
    };
  }]);