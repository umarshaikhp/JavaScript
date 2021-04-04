console.log("This is javascript")
//regulare expression it a pattern  it is used to search the pattern in string
let reg = /umar/;
//reg = /umar/g;//g means global 
//reg = /umar/i;//g means case insensitive

//console.log(reg.source)

let s = "This is  a umar and also umar";
//functionto match expressions
// 1.exec --> it will return an array for match or null for no match
let result = reg.exec(s)
//console.log(result);

// let result1 = reg.exec(s)
// console.log(result1);
// let result2 = reg.exec(s)--> we can use multiple exec with global
// console.log(result2);

//2. test() - return true or false
let result1 = reg.test(s);
//console.log(result1);

// 3. match it will return array of result or null
let result2 = s.match(reg);
//console.log(result2);

// 4. search() - return index of first mach else -1
let result3 = s.search(reg)
console.log(result3);

//5. returns new replace string with all replcements
let result4 = s.replace(reg , "umarshaikh")
console.log(result4);