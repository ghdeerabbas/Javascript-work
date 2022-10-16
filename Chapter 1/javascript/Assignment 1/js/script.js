//  alertSTRING
document.getElementById("alertString").onclick= function(){
    let firstName = "Ghdeer";
    let lastName = "abbas"
    let fullName = firstName +   "  " + lastName
    alert(fullName);
    let statement = "alert ghdeer abbas kamboh from district bahawalghar";
    document.getElementById("statement").innerHTML= statement;
    

}
document.getElementById("clearStatement").onclick= function(){
    document.getElementById("statement").innerHTML=""
}
// alertnumber
document.getElementById("alertNumber").onclick= function(){
    let fullName = 23434;
    alert(fullName);
    let statemen = "alert34343232";
    document.getElementById("statement").innerHTML= statemen;
    

}
document.getElementById("clearStatement").onclick= function(){
    document.getElementById("statement").innerHTML=""}
// SUM2NUMERS
document.getElementById("sum2Numbers").onclick= function(){
    // let fullName = 23434;
    // alert(fullName);
    // let statemen = "alert34343";
    
    document.getElementById("statement").innerHTML=" let a = 2 ;let b = 4;let c = a+b "
    

}
document.getElementById("clearStatement").onclick= function(){
    document.getElementById("statement").innerHTML="";
  
}
document.getElementById("sum2Numbers").onclick= function(){
    document.getElementById("output").innerHTML= 6
    
}
document.getElementById("clearOutput").onclick= function(){
    document.getElementById("output").innerHTML=""}
