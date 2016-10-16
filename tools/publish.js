var ghpages = require('gh-pages');
var path = require('path');

ghpages.publish(path.join(__dirname, '../2'), function(err) {
  err ? console.error(err) : console.log('publish success');
});