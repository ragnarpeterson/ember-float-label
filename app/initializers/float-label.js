import Ember from 'ember';
import Registrable from 'ember-float-label/mixins/registrable';

var alias = Ember.computed.alias;

export default {
  name: 'float-label',

  initialize: function() {
    Ember.TextField.reopen(Registrable, {
      floatLabel: alias('placeholder')
    });

    Ember.TextArea.reopen(Registrable, {
      floatLabel: alias('placeholder')
    });
  }
};
