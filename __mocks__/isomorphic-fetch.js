// this mocks the entire isomorphic-fetch node module (which in our fetch-query-saga.js file does import as `fetch`)

// defines a mocked value
let __value = 42;

// defines the method - creates the spy/dummy/mock  function - always return __value
const isomorphicFetch = jest.fn(() => __value);

// defines an API to set a new value
isomorphicFetch.__setValue = v => __value = v;

// exports to be used anywhere
export default isomorphicFetch;