import Ember from 'ember';
import FloatLabel from 'ember-float-label/components/float-label';

export default Ember.Mixin.create({
  _registerWithFloatLabel: function() {
    var parent = this.get('parentView');
    if (parent instanceof FloatLabel) { parent.send('register', this); }
  }.on('init')
});
