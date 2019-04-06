// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var ans = arguments[2] || [];
  var origin = arguments[1] || document.body;
  // console.log(arguments)

  Array.prototype.indexOf.call(origin.classList, className) > -1  && ans.push(origin);
  Array.prototype.forEach.call(origin.children, function(nextBranch) {
    getElementsByClassName(className, nextBranch, ans);
  });
  return ans;
};
