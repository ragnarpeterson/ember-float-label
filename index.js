/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-float-label',

  included: function(app) {
    this._super.included(app);

    // ember-cli bug forces us to put styles in vendor folder for now
    app.import('vendor/ember-float-label/app.css');
  }
};
