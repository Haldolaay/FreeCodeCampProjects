//free code camp challenges that took me a while to finish, so I want to remember them

//binary to readable code
function binaryAgent(str) {
 return str.split(' ').map(e=> String.fromCharCode(parseInt(e,2))).join('')
}

binaryAgent(" 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

// a code that check falty and truthy values in an object
function truthCheck(collection, pre) {
return collection.every((e,i)=>{
  return (e[pre])
})
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

//this needs to be fixed
function addTogether(num1,num2) {
if (typeof(num1)=='number'){
  if (typeof(num2) == 'number'){
    return num1+num2
  }
  else if(!num2 ){
    return function(newnum){return newnum+num1}}
       else{return undefined}
}
else {return undefined}

}

addTogether(2,[3] )
function palindrome(str) {
  let regex = /[^a-zA-Z0-9]/;
  let arr = str.toLowerCase().split('').filter(item=>!regex.test(item))

  for(var i =0, k = arr.length-1; i<=k ; i++,k--){
    if (arr[i] != arr[k]) return false

  }
  return true;

}



palindrome("My age is 0, 0 si ega ym.")

