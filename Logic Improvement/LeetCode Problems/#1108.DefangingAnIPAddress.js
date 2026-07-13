/**
 * @param {string} ipAddress
 */

function defangingIP(ipAddress){
    let defangedIP = "";

    for (let i = 0; i <ipAddress.length; i++){
        
        if (ipAddress[i] === "."){
            defangedIP += "[.]";}
        else{
            defangedIP += ipAddress[i];}
    }
return defangedIP;
}
console.log(defangingIP('1.1.1.1'));


//using split and join 
function defangingIP2(ipAddress){
    return ipAddress.split(".").join("[.]");
}
console.log(defangingIP2("1.1.1.1"));


//using replaceAll
function defangingIP3(ipAddress){
    return ipAddress.replaceAll( ".", "[.]");
}
console.log(defangingIP3("1.1.1.1"));
