(function() {
  'use strict';
  angular.module('app.mailchimp', []).factory('mailchimpSubscriptionResource', [
    '$resource', function($resource) {
      var actions, defaultParams, url;
      url = void 0;
      defaultParams = void 0;
      actions = void 0;
      url = "http://jimmysburgers.us3.list-manage.com/subscribe/post-json";
      defaultParams = {
        EMAIL: "@email",
        c: "JSON_CALLBACK",
        u: "13dc1b08343fcb74f7273b289",
        id: "6def9ede77"
      };
      actions = {
        post: {
          method: "jsonp"
        }
      };
      return new $resource(url, defaultParams, actions);
    }
  ]).controller('MailchimpSubscribeFormCtrl', [
    '$scope', 'mailchimpSubscriptionResource', function($scope, mailchimpSubscriptionResource) {
      $scope.subscription = new mailchimpSubscriptionResource();
      return $scope.doSubscribe = function() {
        $scope.subscription.$post((function(subscription, response) {
          var msgParts;
          subscription.readableErrorMessage = "";
          if (subscription.result === "error") {
            if (subscription.msg) {
              msgParts = subscription.msg.split(" - ", 2);
              subscription.readableErrorMessage = (msgParts[1] ? msgParts[1] : msgParts[0]);
            }
          }
        }), function() {});
      };
    }
  ]);

}).call(this);
