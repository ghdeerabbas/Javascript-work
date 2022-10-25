// value conversion to boolean part
let name1 = undefined;
console.log(name1)

let name2= "hello";
console.log(name2)

let name3 = null;
console.log(name3)

let name4 ;
console.log(name4)
// value conversion with &&

let ghd = "hello" && 1;
console.log(ghd);
let sss= "hello" && false;
console.log(sss);
let ddd= "hello" && true && 0;
console.log(ddd);
// value conversion with ||
let name5 = "heelo" || 0;
console.log(name5);
let name6 = false || 4;
console.log(name6);
let name7 = "car" || 0 || 3 ;
console.log(name7);




for ( i= 0 ; i<5 ; i++ ){
    console.log(i)}

    var num = 4;
    for(var i= 1; i<=20; i++){
        console.log(num +"*"+i+"="+(num*i));

    }

for(i=0; i<=10; i++){
    if(i==5)
    break
    console.log("I="+i)
}
console.log("AFTER")



for(i=0; i<=10; i++){
    if(i==5)
    continue
    console.log("I="+i)
}


var num = prompt("tgtngtng ntnir")
var isprime= true
for(i=2; i<num; i++){
    var results = num%i
  
    if(results==0){
        console.log('number is not prime='+num+"I"+i)
        isprime= false
        break
    }}
    if(isprime){
        console.log("is num prime")
    }