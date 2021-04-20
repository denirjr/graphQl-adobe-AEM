const _ = require('lodash');
const memoize = require('./memoize');

const replaceKeysDeep = (obj, searchRegExp, replaceWith) => {
    const serialized = JSON.stringify(obj);
    return JSON.parse(serialized.replace(searchRegExp, replaceWith));
}

module.exports = memoize(replaceKeysDeep);