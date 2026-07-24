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

