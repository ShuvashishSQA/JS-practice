function findUniqueChar(word){
    if (typeof word !== "string") return "Please enter a valid string.";

    
    let storedLetters = '';
    let count = '';

    for (let i = 0; i < word.length; i++){

        let alreadyExist = false;

        for (let j = 0; j < storedLetters.length; j++)
            {
                if(word[i] === storedLetters[j]){
                    count[j] += 1;
                    alreadyExist = true;
                    break;
                }
            
                else{
                    count[j] = 1;
                    break;
                }
            }

                if(!alreadyExist){
                    storedLetters += word[i];
                    count[j]=word[i];
                }
                
                
                //let letterCount = 
            }
    return storedLetters;
}

let expectedWord = "elephant";
console.log(findUniqueChar(expectedWord));
