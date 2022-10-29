// concationation
document.getElementById("concatinationsomestring").onclick = function(){
    var firstname = "ghdeer";
    var lastname = "abbas";
    var banger = "!"
     var fullname = firstname+ " "+ lastname +" "+banger
    document.getElementById("Output").innerHTML= fullname;
    
document.getElementById("clearOutput").onclick= function(){
    document.getElementById("Output").innerHTML=""}
  
}
document.getElementById("Promptask").onclick = function(){
    let hy = "Hy";
    let name = prompt("what is yuor name ?");
    let lastname = prompt("what is your last name ?")
    // console.log(hy+" "+name)
    document.getElementById("Output").innerHTML= hy+" "+name +" "+lastname;
        
document.getElementById("clearOutput").onclick= function(){
    document.getElementById("Output").innerHTML=""}

}

// navbar name 
window.onload = function(){
    let nmae = prompt("Enter your full name")
    document.getElementById("username").innerHTML=name;
}
// prompt
let name = +prompt("enter any digit")
console.log(name)
if(name === 5){
    console.log("you are true")
}
// prompt Return
let num1 = +prompt("enter any digit")
// console.log(num1)
if (num1===0){
    alert("enter again")
    return
}
let num2 = +prompt('enter num')
if (num2===0){
    alert("enter again")
    
    
}