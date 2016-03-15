import Ember from 'ember';
import FloatLabel from 'ember-float-label/components/float-label';

const {
  on,
  run: { scheduleOnce }
} = Ember;

export default Ember.Mixin.create({
  _registerWithFloatLabel: on('init', function() {
    var parent = this.get('parentView');
    if (parent instanceof FloatLabel) {
      scheduleOnce('afterRender', () => {
        parent.send('register', this);
      });
    }
  })
});
