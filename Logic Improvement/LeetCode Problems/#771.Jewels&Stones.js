function findJewelCount(jewel, stone){
let count = 0; 

const jewelSet = new Set(jewel);

    for (const stones of stone){
        if(jewelSet.has(stones))
                count ++;
        }

return count;
}

console.log(findJewelCount('aA', 'aAAcderea'));