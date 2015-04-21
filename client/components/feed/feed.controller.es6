/** @author jeffwesson <jeffwesson.github.io> **/

(function () {
  angular.module('newsie').controller('FeedController', FeedController);

  // Dependency injection
  FeedController.$inject = ['AccountsService', 'EventsService'];

  function FeedController(AccountsService, EventsService) {
    var feed = this;

    feed.users = AccountsService.accounts;
    feed.newsItems = EventsService.events;

    feed.newUser = null;
    feed.users.currentSearchTerm = '';
    feed.newsItems.currentSearchTerm = '';

    // Users CRUD methods
    feed.addUser = function (userObject) {

      // Generate timestamp for hashing
      userObject.id = new Date().getTime();

      AccountsService.addAccount(userObject);
      feed.newUser = {};
    };

    feed.getUser = function (userId) {
      AccountsService.readAccount(userId);
    };

    feed.saveUser = function (userId) {
      AccountsService.updateAccount(userId);
    };

    feed.deleteUser = function (userId) {
      AccountsService.deleteAccount(userId);
    };

    // NewsItems CRUD methods
    feed.addNewsItem = function (eventObject) {

      // Generate timestamp for hashing
      eventObject.time = eventObject.id = new Date().getTime();

      EventsService.addEvent(eventObject);
      feed.newNewsItem = {};
    };

    feed.getNewsItem = function (eventId) {
      EventsService.readEvent(eventId);
    };

    feed.saveNewsItem = function (eventId) {
      EventsService.updateEvent(eventId);
    };

    feed.deleteNewsItem = function (eventId) {
      EventsService.deleteEvent(eventId);
    };



    // Using static JSON
    //
    //feed.getUsers = function () {
    //  return AccountsService.getAccounts().then(function (data) {
    //    feed.users = data || [];
    //    return feed.users;
    //  })
    //};
    //feed.getUsers();
  }
})();