/** @author jeffwesson <jeffwesson.github.io> **/

'use strict';

(function () {
  angular.module('newsie').controller('FeedController', FeedController);

  // Dependency injection
  FeedController.$inject = ['accountsService', 'eventsService'];

  function FeedController(accountsService, eventsService) {
    var feed = this;

    feed.users = accountsService.accounts;
    feed.newsItems = eventsService.events;

    feed.newUser = null;

    // Users CRUD methods
    feed.addUser = function (userObject) {

      if (1) {
        // Generate timestamp for hashing
        userObject.id = new Date().getTime();

        accountsService.addAccount(userObject);
        feed.newUser = {};
      }
    };

    feed.getUser = function (userId) {
      accountsService.readAccount(userId);
    };

    feed.saveUser = function (userId) {
      accountsService.updateAccount(userId);
    };

    feed.deleteUser = function (userId) {
      accountsService.deleteAccount(userId);
    };

    // NewsItems CRUD methods
    feed.addNewsItem = function (eventObject) {

      // Generate timestamp for hashing
      eventObject.time = eventObject.id = new Date().getTime();

      eventsService.addEvent(eventObject);
      feed.newNewsItem = {};
    };

    feed.getNewsItem = function (eventId) {
      eventsService.readEvent(eventId);
    };

    feed.saveNewsItem = function (eventId) {
      eventsService.updateEvent(eventId);
    };

    feed.deleteNewsItem = function (eventId) {
      eventsService.deleteEvent(eventId);
    };

    // Using static JSON
    //
    //feed.getUsers = function () {
    //  return accountsService.getAccounts().then(function (data) {
    //    feed.users = data || [];
    //    return feed.users;
    //  })
    //};
    //feed.getUsers();
  }
})();

//# sourceMappingURL=feed.controller-compiled.js.map