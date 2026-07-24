//using replaceAll
function defangingIP(ipAddress){
    return ipAddress.replaceAll( ".", "[.]");
}

console.log(defangingIP("1.1.1.1"));