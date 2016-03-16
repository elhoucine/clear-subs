Package.describe({
  name: "elhoucine:clear-subs",
  summary: "A simple meteor package to clear subscriptions",
  version: "0.0.1",
  git: "https://github.com/elhoucine/clear-subs.git"
});

Package.on_use(function(api) {
  api.add_files([
  ], 'client');

  api.export('ClearSubs');
});

//TODO: Tests
Package.on_test(function(api) {});
