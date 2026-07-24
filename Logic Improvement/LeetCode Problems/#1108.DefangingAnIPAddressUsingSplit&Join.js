//using split and join 
function defangingIP(ipAddress){
    return ipAddress.split(".").join("[.]");
}
console.log(defangingIP("1.1.1.1"));