// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  let ans = [];
  if (obj === null) return "null";	
  if (typeof obj === 'string') return '"' + obj + '"';
  if (Array.isArray(obj)) return "[" + obj.map(j=> stringifyJSON(j)).join() + "]";
  if (typeof obj === 'number' || typeof obj === 'boolean') return obj.toString();
  for(let i in obj) {
    if ( typeof obj[i] !== 'function' && typeof obj[i] !== 'undefined' ) {
      ans.push(stringifyJSON(i)+':'+stringifyJSON(obj[i]));
    }
  }
  return '{' + ans.join() + '}';
};