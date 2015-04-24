/** @author jeffwesson <jeffwesson.github.io> **/

'use strict';

(function () {
  angular.module('newsie').controller('ControlsController', ControlsController);

  // Dependency injection
  ControlsController.$inject = ['accountsService', 'eventsService'];

  function ControlsController(accountsService, eventsService) {
    var controls = this;

    controls.usersObject = accountsService.accounts;
    controls.newsItemsObject = eventsService.events;

    controls.sort = function () {};
  }
})();

// sorts by a given parameter

//# sourceMappingURL=controls.controller-compiled.js.map