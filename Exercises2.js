/*
1) Declare a JavaScript array and initialize it with some names (Lars, Jan, 
Peter, Bo, Frederik etc.). Use the filter method to
create a new array with only 
names of length <=3.
Use the forEach method to iterate and print (console.log) 
both the original and the new array.
*/

const names = ["Vladimir","Emanuel","Joe","Mette","Olaf","Boris","Volodymyr","Bill","Bob"]

const newNames = names.filter(name=>name.length<=3)

names.forEach(n=>console.log(n));

newNames.forEach(n=>console.log(n))

/*
2) Use the names-array created above, and, using its map
 method, create a new array with all names uppercased.
 */

 const upperCase = names.map(name=>name.toUpperCase()).forEach(name=>console.log(name));


 /*3) Use map, join + just a little bit more to create a function, 
 which given the array of names, for example: ["Lars", "Peter", "Jan", "Ian"]
  returns a string with the HTML for the names in an <ul> as sketched below:*/


const htmlnames = "<ul><li>" + names.join("</li><li>")+"</il><ul>"

console.log(htmlnames)