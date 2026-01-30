function getSpaces(row, height){

    let spaces ="";
    spaces += " ".repeat(height - row);

    return spaces;
    }


function getStars(row, height){

    let stars = "";

    const totalStars = (row * 2) - 1;

    for(let starCount = 1 ; starCount <= totalStars; starCount ++){
        if(starCount === 1 ||
            starCount === totalStars ||
            row === height
        ){
        stars += "*";
        }
        else{
            stars += " ";
        }
    }

    return stars;
}


function printHollowPyramid(height){
    for (let row = 1; row <= height; row++){
        console.log(getSpaces(row, height) + getStars(row, height));
    }
}

printHollowPyramid(5);