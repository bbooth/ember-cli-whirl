/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-whirl',
  included: function (app) {
    app.import(app.bowerDirectory + "/whirl/dist/whirl.css");
  }
};
