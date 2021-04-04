console.log("Welcome")
let regex = /umar/;
regex = /^m/; //means experession will match if string start with
regex = /umar$/;//$ means expression will match if string end with
regex = /u.ar/;//matches one character
regex = /u*ar/;//matches any 0 or more characters
regex = /um?ar?/;//? aftercharacter means that character is optional
regex = /u\*ar/;

let s = "u*ar is umar";

let result = regex.exec(s);
console.log("The result form the exec is", result);

if (regex.test(s)) {
    console.log(`The String ${s} mathe the expression ${regex.source}`);
} else {
    console.log(`The String ${s} does not mathe the expression ${regex.source}`);
}