//To view in Console
console.log(1+1);

/*
  To store the Values
  var let const
*/

var a = 5;
var b = 5;
console.log(a + b);

// Add two strings with ","
var name1 = "Ajith";
var name2 = "Aravind";

console.log(name1 + "," + name2);

//String and number
var aa = 10;
var bb = "5";

console.log(aa + bb); 
console.log(aa - bb);
// the above is implicit  coercion - JS decides
// datatype conversion or coercion
/*  10 + "5" if both are different in Addition it 
    will take it as a string and join it "105"
   + has two jobs
     1. String concatenation(joining)
     2. Mathematical Addition
  
    10 - "5" we can't subtract with string, so it implicitly
    take it as a number and subtract
     "5" 
   - has only one job
     1. Subtraction
*/

console.log(typeof(aa));
console.log(typeof(bb));


//explicit coercion
console.log(aa + parseInt(bb));
/*
   even if we give input in string
   we can convert it into number using parseInt "10 + "5" = 15"
*/  