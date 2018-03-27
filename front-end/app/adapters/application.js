import DS from 'ember-data';
import { underscore } from '@ember/string';
import Inflector from 'ember-inflector';
import { pluralize } from 'ember-inflector';

export default DS.JSONAPIAdapter.extend({
  pathForType(type) {
    return underscore(pluralize(type));
  }
});
