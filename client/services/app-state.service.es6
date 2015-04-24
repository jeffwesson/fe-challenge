/**
 * Author: Jeff Wesson
 * Date: 4/23/15
 */

(function () {
  angular.module('newsie').service('appStateService', appStateService);

  // dependency injection
  appStateService.$inject = [];

  function appStateService() {
    var service = this;
  }
})();
