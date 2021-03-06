import { configure, validator, helpers, ObjectValidator } from './lgtm';

var LGTM = {
  configure: configure,
  validator: validator,
  helpers: helpers,
  ObjectValidator: ObjectValidator
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = LGTM;
} else if (typeof define !== 'undefined' && define.amd) {
  define(function() { return LGTM; });
} else if (typeof window !== 'undefined') {
  window.LGTM = LGTM;
} else if (this) {
  this.LGTM = LGTM;
}
