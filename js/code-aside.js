/*
+---------------------+
| REGULAR EXPRESSIONS |
+---------------------+
*/
// REFERENCES: 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
// http://www.regexlib.com

// EXAMPLE:
// const str = "Java Coffee";
// const pattern = /Java*/;
// Try /Java*/ instead of /JavaScript/
// Try email-pattern


// Reg-exp object has the method test(strToBeTested)
// for testing the validity of a given string.  
// if (pattern.test(str)) { 
//    console.log("Valid format!");
// } else { 
//    console.log("Invalid format!"); 
// }




/*
+--------------------------------------+
| EXTRACT KEYS OF AN OBJECT INTO ARRAY |
+--------------------------------------+
*/
// REFERENCE: 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys

// syntax: Object.keys(treatedObject)
// EXAMPLE:
const person = {
    name: "Douglas Crockford",
    age: 60,
    occupation: "programmer",
    javaScriptAuthority: true,
    telephone: [
        "1 000 111 2222",
        "1 111 222 3333"
    ],
    teach: function () {
        console.log("Pay attention and use only the good parts of JavaScript!");
    }
};

// Find out the number of properties:
/*
let counter = 0;
let arrKeys = [];
for (let k in person) {
    arrKeys.push(k);
    counter++;
}
*/

let arrayKeys = Object.keys(person);
console.log(`Object person has ${arrayKeys.length} properties`, arrayKeys);



