let i=1;
//let height=5;


for(let row = height; row >= 1; row--){
    let spaceTracker = "";
    let starTracker = "";


    for (let starcount = 1; starcount <= (2*row - 1) ; starcount ++){
        starTracker+= "*";
    }

    for (let spaceCount = (height - row); spaceCount > 0; spaceCount--){
         spaceTracker += " ";
    }


    console.log(spaceTracker + starTracker);
}