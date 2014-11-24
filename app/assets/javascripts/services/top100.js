app.factory('Top100', ['$resource',
  function($resource) {
    var content = $resource('/top100');
    return {
      content: content
    }
  }]);