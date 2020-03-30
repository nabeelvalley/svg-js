import KeyValuePair from '../KeyValuePair'

/**
 * Convert an object into it's KeyValuePair Representation
 */
const objectToKeyValueArray = (obj: Object): KeyValuePair<string, string>[] =>
  Object.keys(obj).map(key => ({ key, value: obj[key] }))

export default objectToKeyValueArray
