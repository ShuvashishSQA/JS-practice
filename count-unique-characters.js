function countUniqueChar(word){

    if (typeof word !=String){
        console.log("Please enter a word first....")
    }
    
    let count = {};

    word = word.trim().toLowerCase();

    for (let i= 0; i < word.length; i++){
        let char = word[i];
        count[char] = (count[char]||0) + 1;        
    }
    
    return count;
}

const INPUTWORD = "Approximately";
console.log(countUniqueChar(INPUTWORD));