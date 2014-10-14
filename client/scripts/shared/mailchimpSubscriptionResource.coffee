'use strict';

angular.module('app.mailchimp', [])

.factory('mailchimpSubscriptionResource', [
  '$resource'
  ($resource) ->
    url = undefined
    defaultParams = undefined
    actions = undefined
    url = "http://jimmysburgers.us3.list-manage.com/subscribe/post-json"
    defaultParams =
      EMAIL: "@email"
      c: "JSON_CALLBACK"
      u: "13dc1b08343fcb74f7273b289"
      id: "6def9ede77"

    actions = post:
      method: "jsonp"

    return new $resource(url, defaultParams, actions)
])

.controller('MailchimpSubscribeFormCtrl', [
  '$scope', 'mailchimpSubscriptionResource'
  ($scope, mailchimpSubscriptionResource) ->
    
    $scope.subscription = new mailchimpSubscriptionResource()
    
    $scope.doSubscribe = ->

      $scope.subscription.$post ((subscription, response) ->

        subscription.readableErrorMessage = ""
  
        if subscription.result is "error"
          if subscription.msg
            
            msgParts = subscription.msg.split(" - ", 2)
            subscription.readableErrorMessage = (if msgParts[1] then msgParts[1] else msgParts[0])
        return
        
      ), ->

      return
])