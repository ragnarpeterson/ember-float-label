import Em from 'ember';
import FloatLabel from '../components/float-label';

export default Em.Mixin.create({
  _registerWithFloatLabel: function() {
    var parent = this.get('parentView');
    if (parent instanceof FloatLabel) { parent.send('register', this); }
  }.on('init')
});
