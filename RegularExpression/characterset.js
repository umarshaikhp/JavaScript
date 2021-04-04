//const regex = /^u/i;
//Character Sets - we use []
let regex = /u[ryu]ar/;//can be an r,y or u
regex = /u[a-z]ar/;// can be an any character from a to z
regex = /u[^amr]a[urc]/;//cannot be nany of a,m,r and canbe u,r,c
regex = /u[a-zA-z]a[ar0-9]/;


//Quantifier - we use {}
regex = /um{2}r/; //m can occur 2 times;
regex = /um{0,2}ar/; //m can occur 0 to 2(0 or 1 or 2) times

//Grouping - we use parenthesis for grouping()
regex = /(uma){2}([0-9]r){3}/;
str = "umar shaikh";
str = "umauma1r2r3r";

let result = regex.exec(str);
console.log("The result form the exec is", result);

if (regex.test(str)) {
    console.log(`The String ${str} match the expression ${regex.source}`);
} else {
    console.log(`The String ${str} does not mathe the expression ${regex.source}`);
}