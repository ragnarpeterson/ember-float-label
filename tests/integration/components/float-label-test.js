import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import FloatLabelInitializer from 'dummy/initializers/float-label';

moduleForComponent('float-label', 'Integration | Component | float label', {
  integration: true,
  beforeEach() {
    FloatLabelInitializer.initialize();
  }
});

test('ember input', function(assert) {
  assert.expect(4);

  this.render(hbs`
    {{#float-label}}
      {{input type="text" value=name placeholder="Name"}}
    {{/float-label}}
  `);

  assert.equal(this.$('.float-label-text').text().trim(), 'Name', 'the placeholder is added in a span');
  assert.ok(!this.$('label').hasClass('has-value'), 'the float-label has no class has-value');

  this.$('input').val('Harry Kane').trigger('change');
  assert.ok(this.$('label').hasClass('has-value'), 'the float-label has the class has-value');

  this.$('input').val('').trigger('change');
  assert.ok(!this.$('label').hasClass('has-value'), 'the float-label has no class has-value when the input is emptied');
});

test('ember textarea', function(assert) {
  assert.expect(3);

  this.render(hbs`
    {{#float-label}}
      {{textarea value=notes placeholder="Notes"}}
    {{/float-label}}
  `);

  assert.equal(this.$('.float-label-text').text().trim(), 'Notes', 'the placeholder is added in a span');
  assert.ok(!this.$('label').hasClass('has-value'), 'the float-label has no class has-value');

  this.$('textarea').val('Harry Kane').trigger('change');
  assert.ok(this.$('label').hasClass('has-value'), 'the float-label has the class has-value');
});

test('render with value', function(assert) {
  assert.expect(1);

  this.render(hbs`
    {{#float-label}}
      {{input type="text" value="Harry Kane" placeholder="Name"}}
    {{/float-label}}
  `);

  assert.ok(this.$('label').hasClass('has-value'), 'the float-label has the class has-value');
});

test('overwrite default label', function(assert) {
  assert.expect(1);

  this.render(hbs`
    {{#float-label label="Full Name"}}
      {{input type="text" value=name example="Harry Kane"}}
    {{/float-label}}
  `);

  assert.equal(this.$('.float-label-text').text().trim(), 'Full Name', 'the label attribute is added in a span');
});
