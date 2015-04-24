/** @author jeffwesson <jeffwesson.github.io> **/

'use strict';

(function () {
  angular.module('newsie', ['ngNewRouter', 'ngMessages', 'firebase']).constant('FIREBASE_URI', 'https://newsie-app.firebaseio.com').controller('AppController', ['$router', AppController]);

  AppController.$routeConfig = [{ path: '/', redirectTo: '/main' }, { path: '/main', components: { top: 'controls', bottom: 'feed' } }];

  function AppController($router) {
    var app = this;

    app.getFullYear = function () {
      return new Date().getFullYear();
    };
  }
})();

//# sourceMappingURL=app-compiled.js.map