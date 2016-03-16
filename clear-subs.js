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
