if (typeof Promise === "undefined") {
    // Promise polyfill
    require("promise/lib/rejection-tracking").enable();
    window.Promise = require("promise/lib/es6-extensions.js");
}

if (typeof window !== "undefined") {
    // fetch() polyfill for making API calls.
    require("whatwg-fetch");
}

// Object.assign() is commonly used with React.
Object.assign = require("object-assign");

// Support for...of (a commonly used syntax feature that requires Symbols)
require("core-js/es/symbol");

// Support iterable spread (...Set, ...Map)
require("core-js/es/array/from");

// Support array.includes
require("core-js/es/array/includes");

// Required by react-table component
require("core-js/es/array/find");
require("core-js/es/array/find-index");
require("core-js/es/number/is-nan");
require("core-js/es/string/ends-with");
require("core-js/es/string/starts-with");
require("core-js/es/string/includes");

require("core-js/es/object/entries");

require("core-js/es/array/iterator");