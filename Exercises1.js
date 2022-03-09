/*JavaScript functions and Callbacks
1) Create a new JavaScript file and add these three functions

Function Declaration
       //Observe: no return type, no type on parameters
function add(n1, n2){
   return n1 +n2;
}

Function Expression
      const sub = function(n1,n2){
  return n1 - n2
} 

Callback example
const cb = function(n1,n2, callback){
  return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
};*/

function add(n1,n2){
    return n1+n2;
}

const sub = function(n1,n2){
    return n1-n2;
}



const cb = function(n1,n2, callback){
        return "Result from the two numbers: "+n1+"and"+n2+"="+callback(n1,n2);


} 


console.log( add(1,2)) // 3

console.log(add) // printer [Function: add]]

// console.log(add(1,2,3));// 3

console.log(add(1));// NaN

console.log(cb(3,3,add)); // 3+3=6

console.log(cb(4,3,sub)); // 4+3=1

//console.log(cb(3,3,add())); // TypeError: callback is not a function

console.log(cb(3,"hh",add)); // 3+hh=3hh

// More Callbacks

//  4)  Write a mul(n1, n2) function (inspired by add and sub) 
//and use it as the callback for the cb function

const mul = function(n1,n2){
    return n1*n2;
}
console.log(cb(2,6,mul))

// 5) Call cb, this time with an anonymous function 
//that divides the first argument with the second

console.log(cb(25,5, (x,y)=>{return x/y;}));





