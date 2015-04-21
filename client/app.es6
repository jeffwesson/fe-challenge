/** @author jeffwesson <jeffwesson.github.io> **/

(function () {
  angular.module('newsie', ['firebase', 'ngMessages'])
    .constant('FIREBASE_URI', 'https://newsie-app.firebaseio.com');
})();
