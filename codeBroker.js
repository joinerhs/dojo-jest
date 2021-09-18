const secret = '1325';

function broke(num){
  let result = '';
  let n = num.toString();
  for (let i = 0; i < 4; i++) {
    if(n.charAt(i) == secret.charAt(i)){
      result = result + 'X';
    }else if(secret.indexOf(n.charAt(i)) != i 
					&& secret.indexOf(n.charAt(i)) != -1){
				result = result + "-"; 
		}

  }   
  return result;
}

module.exports.broke = broke;










/* function sum(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}
module.exports.sum = sum;
module.exports.substract = substract; */