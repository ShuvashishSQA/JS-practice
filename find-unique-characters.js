function findUniqueChar(word){
    if (typeof word !== "string") return "Please enter a valid string.";

    
    let storedLetters = '';

    for (let i = 0; i < word.length; i++)
    {

        let alreadyExist = false;

        for (let j = 0; j < storedLetters.length; j++)
            {
                if(word[i] === storedLetters[j]){
                    alreadyExist = true;
                    break;
                }
            }

            if(!alreadyExist)
            {
                storedLetters += word[i];
            }
    }
    return storedLetters;
}

let expectedWord = "elephant";
console.log(findUniqueChar(expectedWord));
