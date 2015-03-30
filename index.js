/* jshint node: true */
'use strict';

module.exports = {
  name: 'bf-app',
  included: function(app, parentAddon) {
    this._super.included(app, parentAddon);
    app.import('vendor/bf-app.css');
  }
};
