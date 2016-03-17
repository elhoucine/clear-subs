Package.describe({
  name: "elhoucine:clear-subs",
  summary: "A simple meteor package to clear subscriptions",
  version: "0.0.3",
  git: "https://github.com/elhoucine/clear-subs.git"
});

Package.on_use(function(api) {
  api.add_files([
    'clear-subs.js',
  ], 'client');

  api.export('ClearSubs');
});

//TODO: Tests
Package.on_test(function(api) {});
