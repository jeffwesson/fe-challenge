/** @author jeffwesson <jeffwesson.github.io> **/

'use strict';

(function () {
  angular.module('newsie').controller('ControlsController', ControlsController);

  // Dependency injection
  ControlsController.$inject = ['AccountsService', 'EventsService'];

  function ControlsController(AccountsService, EventsService) {
    var controls = this;

    controls.usersObject = AccountsService.accounts;
    controls.newsItemsObject = EventsService.events;

    controls.currentSearchTerm = '';

    controls.sort = function () {};
  }
})();

// sorts by a given parameter

//# sourceMappingURL=controls.controller-compiled.js.map