import Ember from 'ember';

const {bool,oneWay} = Ember.computed;

export default Ember.Component.extend({
  tagName: 'label',
  classNames: ['float-label'],
  classNameBindings: ['hasValue'],
  field: null,
  label: oneWay('field.floatLabel'),
  value: oneWay('field.value'),
  hasValue: bool('value'),

  actions: {
    register: function(field) {
      this.set('field', field);
    }
  }
});
