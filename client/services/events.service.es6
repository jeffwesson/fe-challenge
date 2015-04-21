/** @author jeffwesson <jeffwesson.github.io> **/

(function () {
  angular.module('newsie').service('EventsService', EventsService);

  EventsService.$inject = ['$firebaseArray', 'FIREBASE_URI'];

  function EventsService($firebaseArray, FIREBASE_URI) {

    var rootRef = new Firebase(FIREBASE_URI);
    var ref = rootRef.child('events');
    var service = this;

    // Firebase node: accounts
    service.events = $firebaseArray(ref);

    // Create account
    service.addEvent = function (event) {
      service.events.$add(event);
    };

    // Read account
    service.readEvent = function (eventId) {
      service.events.$get(eventId);
    };

    // Update account
    service.updateEvent = function (eventId) {
      service.events.$save(eventId);
    };

    // Delete account
    service.deleteEvent = function (eventId) {
      service.events.$remove(eventId);
    };



    // Uses static JSON
    //
    // get events returns a promise
    //service.getEvents = function (url = '/models/events.json') {
    //  return $http.get(url)
    //    .then(getEventsSuccess)
    //    .catch(getEventsError);
    //
    //  function getEventsSuccess (response) {
    //    return response.data;
    //  }
    //
    //  function getEventsError (error) {
    //    console.error('XHR failed for getEvents', error.data);
    //  }
    //};
  }
})();
