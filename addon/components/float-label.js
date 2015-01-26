import Em from 'ember';

export default Em.Component.extend({
  tagName: 'label',
  classNames: ['float-label'],
  classNameBindings: ['hasValue'],
  field: null,
  label: Em.computed.oneWay('field.floatLabel'),
  value: Em.computed.oneWay('field.value'),
  hasValue: Em.computed.bool('value'),

  actions: {
    register: function(field) {
      this.set('field', field);
    }
  }
});
