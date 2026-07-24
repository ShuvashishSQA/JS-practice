function maximumWealth(wealthMatrix) {
    let highestWealth = 0;

    for(const accounts of wealthMatrix){
        const totalWealth = accounts.reduce((sum, account)=> sum + account, 0);
        
        highestWealth = Math.max(highestWealth, totalWealth);
    }
    return highestWealth;
}

console.log(maximumWealth([[1,2], [2,3], [1,7]]));