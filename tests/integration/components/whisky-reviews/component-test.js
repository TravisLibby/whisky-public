import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('whisky-reviews', 'Integration | Component | whisky reviews', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{whisky-reviews}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#whisky-reviews}}
      template block text
    {{/whisky-reviews}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
