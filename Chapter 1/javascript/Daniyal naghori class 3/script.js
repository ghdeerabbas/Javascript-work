let name = 3;
let name1 = 4;
console.log(name+name1);



let firstname = "ghdeer abbas";
let lastname =  "zarq abbas";
let fullname = firstname +" "+ lastname


console.log("thanks!"+fullname+"");

let firstname1 = "ghdeer abbas";
let lastname2 =  "zarq abbas";
let fullname3 = firstname1.concat(" "+lastname2)
console.log(fullname3);

// comparison operatore

let a = 2+2 == 4
console.log(a);

let b = 2+2 === "4"
console.log(b);

let c = 2+2 !== 4
console.log(c);

let d = 2+2 < 4
console.log(d);

let e = 2+2 > 4
console.log(e);

// nested if

// let country = prompt("From which country you belong");

// let age = Number (prompt("what is your age ?"))

// if (country.toLowerCase() === "pakistan"){
//     // console.log('you are valid for ticket')
//     if (age >= 18 ) {console.log("succeccful person for ticket")}
//     else {console.log("age restriction")}
// } else {console.log("invalid country")}



// push and pop

// let fruit = prompt("Chose any fruit ");

// let fruits = ["banana","orange","apple"];

// let ghd = fruits.pop() 
// console.log(ghd)


const fruits1 = ["bananaa","orangee","applee"];
fruits1[1] = "ghdeer"
console.log(fruits1)





// splice
const fruits2 = ["bananaa","orangee","applee"];
fruits2.splice(2,0, "kiwi", )
console.log(fruits2)



// spice
const fruits3 = ["bananaa","orangee", "apple", "ffr"];
var phll = fruits3.slice(0)
console.log(fruits3)
console.log(phll)


// OBJECT
const person = {
    name : "ghdeer abbas",
    fathername : "zafar iqbal",
    age : 22,
    "eye-color" : "blue"
}
console.log(person)



// LOOPS
 for (var i = 0; i < 3 ; i++)
//  console.log(i)
 console.log("helo" +i)

//  ARAAY& LOOPS

var cleancities = ["krachi", "lahore","islamabad","pashawar"]

for (var i = 0 ; i<=3; i++){
    if("lahore" === cleancities[i])
    console.log("it is the cleancities of pakistan")
    // break
}



//EXAMPLE


var fistname = ["ghder", "abbs ","ali" , "zarq" , "iqbal"]
var latname = ["ghderer" ,"qasam", "saqlain" , "awais", "ali raza"];
var fulname = []

for (var i = 0 ;i < fistname.length ;i++){
    
    for(var j = 0 ; j < latname.length ; j++){
        fulname.push(fistname[i] + latname[j]); 
    // console.log(fulname) 
    }
    
}
console.log(fulname)





// roundOf
let hh = 123.76
let gg = Math.round(hh)
console.log(gg)


//  console.log (math.)

// Math.ceil and floor()

// Math.random 0.000000000000000 - 0.99999999999999999999

let f = Math.random() * 19
console.log(f)

// console.log(fff)

// parseint()

let kis= parseInt("10.23")
let s = parseInt("hello")
console.log(s)
console.log(kis)


// parsefloat

let h = parseFloat("10.95")
console.log(h)


// Number
let k =Number("10.23")
let o = Number("hello")
let y= Number(true)//1
console.log(k)
console.log(o)

// typeoff
let p = String(33)
console.log(typeof p)

// // total.tofixed()
// let jj = 34.4434
// let ll = 

// slice

// let firstgh = "pakistan";

// let hhhh = firstgh.slice(2, 5).toUpperCase()
// let hhh = firstgh.slice(0, 1).toLocaleLowerCase()
// console.log(hhhh)
// console.log(hhh)


// slice & if etc
// let dd = prompt("enter your date of mnnth")

// let mon = dd.length;

// if(mon > 3){
//     var marsh = dd.slice(0,1)
// }
// console.log(marsh)


// indexof & lastindexof

var bgt= "the ghdeer abbas kamboh"
var jjj = bgt.indexOf("abbas")
console.log(jjj)

// charAt
var ss = "ghd eer abb ass"

var ccc = ss.toUpperCase().charAt(6)
console.log(ccc)

// replace

var gjk = "ghdder abbas"
var bnm = gjk.replace("abbas", "zarq")
console.log(bnm)

// relace
let ali= "ffrufd blue white black blue"
 let ghd = ali.replace( /blue/gi , "yellow")
 console.log(ghd)








