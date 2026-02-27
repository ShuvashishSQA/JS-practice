const HEIGHT = 5; 

for (let row = 1; row <= HEIGHT; row++){
    let spaces = "";
    let stars = "";

    const totalStars = (row * 2) - 1;

    for (let spaceCount = 0; spaceCount < (HEIGHT - row); spaceCount++){
        spaces += " ";
    }

    for(let starCount = 1; starCount <= totalStars; starCount++){
        if(starCount === 1 || 
           starCount === totalStars || 
           row === HEIGHT){
            stars += "*";
            }
        else{
            stars += " ";
        }
    }

    console.log(spaces + stars);

}
