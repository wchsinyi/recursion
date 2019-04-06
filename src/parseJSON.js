// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// JSON.parse('{}');              // {}
// JSON.parse('true');            // true
// JSON.parse('"foo"');           // "foo"
// JSON.parse('[1, 5, "false"]'); // [1, 5, "false"]
// JSON.parse('null');            // null


// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  json = json.split('')
  var marks = { '{': '}', '[': ']' , '"':'"', }
  // Invalid input  
  if (json[0]!="'" && json.slice(-1)[0]!="'"){
  	throw new SyntaxError('Invalid Input')
  }
  if (json[0].indexOf(Objects.prototype.keys(marks))>=0){
  	if (json.slice(-1)[0]!= marks[json[0]]){
  		throw new SyntaxError('Invalid Input') 
  	}else{
  		// remove "true" and "false" quotation marks 
  		if (json[0]=='{'){
  			var ans = json.slice(1, json.length-2).join('')
  			ans.split(',').map(i=> i.split(':')) 
  			var newarr = []
  			for (let b =0; b<ans.length; b++){
  				let k = ans[b][0] 
  				k= k.replace('"','').replace('"', '')
  				newarr[k] = parseJSON(ans[b][1])  
  			}
  			return newarr
  		}else if(json[0]=='['){
  			// deal with an array 
  		}else{
  			// it's something else 
  		}

  	}
  }
  // 



};
