'use strict';

/**
 * @param {function} func
 * @param {number} ms
 * @return {function}
 */

export function defer(func, ms) {
  // put your code here
  return function() {
    setTimeout(() => func.apply(this, arguments), ms);
  }
}
