const memoize = (func) => {
    const cache = {};
    return (...args) => {
        const key = JSON.stringify(args);
        return key in cache ? cache[key] : (cache[key] = func(...args));
    }
}

module.exports = memoize;