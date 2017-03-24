# clear-subs
Stop any client subscription easily.

## Why ?
subscription.stop() only stop the subscription fot that particular instance. ClearSubs.stop() clear all subscriptions with a particular name, and can also clear all active subscriptions in your app.

## Api
``
ClearSubs.clear('subscriptionName');
``

``
ClearSubs.clearAll();
``
