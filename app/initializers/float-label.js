import Em from 'ember';
import Registrable from 'ember-float-label/mixins/registrable';

var alias = Em.computed.alias;

export default {
  name: 'float-label',

  initialize: function() {
    Em.TextField.reopen(Registrable, {
      floatLabel: alias('placeholder')
    });

    Em.TextArea.reopen(Registrable, {
      floatLabel: alias('placeholder')
    });

    Em.Select.reopen(Registrable, {
      floatLabel: alias('prompt')
    });
  }
};
