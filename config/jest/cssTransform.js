'use strict';
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable max-statements */
/* eslint-disable max-lines-per-function */
/* eslint-disable complexity */

// This is a custom Jest transformer turning style imports into empty objects.
// http://facebook.github.io/jest/docs/en/webpack.html

module.exports = {
    process() {
        return 'module.exports = {};';
    },
    getCacheKey() {
        // The output is always the same.
        return 'cssTransform';
    },
};
