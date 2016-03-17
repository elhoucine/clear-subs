ClearSubs = {};

/**
* Clear a subscription.
* {String} subscription
*/
ClearSubs.clear = function(subscription) {
  var subs = Meteor.default_connection._subscriptions;
  for(sub in subs){
    if(subs[sub].name === subscription){
      subs[sub].stop()
    }
  }
}

/**
* Clear all subscriptions.
*/
ClearSubs.clearAll = function() {
  var subs = Meteor.default_connection._subscriptions;
  for(sub in subs){
    subs[sub].stop()
  }
}
