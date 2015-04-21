/** @author jeffwesson <jeffwesson.github.io> **/

'use strict';

(function () {
  angular.module('newsie').service('AccountsService', AccountsService);

  AccountsService.$inject = ['$firebaseArray', 'FIREBASE_URI'];

  function AccountsService($firebaseArray, FIREBASE_URI) {

    var rootRef = new Firebase(FIREBASE_URI);
    var ref = rootRef.child('accounts');
    var service = this;

    // Firebase node: accounts
    service.accounts = $firebaseArray(ref);

    // Create account
    service.addAccount = function (account) {
      service.accounts.$add(account);
    };

    // Read account
    service.readAccount = function (accountId) {
      service.accounts.$get(accountId);
    };

    // Update account
    service.updateAccount = function (accountId) {
      service.accounts.$save(accountId);
    };

    // Delete account
    service.deleteAccount = function (accountId) {
      service.accounts.$remove(accountId);
    };

    // Uses static JSON
    //
    // get accounts returns a promise
    //service.getAccounts = function (url = '/models/accounts.json') {
    //  return $http.get(url)
    //    .then(getAccountsSuccess)
    //    .catch(getAccountsError);
    //
    //  function getAccountsSuccess (response) {
    //    return response.data;
    //  }
    //
    //  function getAccountsError (error) {
    //    console.error('XHR failed for getAccounts', error.data);
    //  }
    //};
  }
})();

//# sourceMappingURL=accounts.service-compiled.js.map