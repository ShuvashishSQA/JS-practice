let i = 1;
let height =5;

for (let row = 1; row <= height; row++) {
    let space = "";
    let star = "";

    for (let k = 0; k < (height-row); k++) {
        space += " ";
    }

    //space += " ".repeat(height-row);

    for (let j = 0; j < (row * 2)-1; j++) {
        star += "*";
    }

    //star += "*".repeat(row*2 - 1);

        console.log(space + star);
    
    // if(row < height) {
    //     console.log(" ".repeat(height-1)+ "/");
    // }
    //This if statement is used to place a slash after each 8 row, 
    // that's for visibility improvement, nothing else.Output will be like,
    
            //     *
            //     /
            //    ***
            //     /
            //   *****
            //     /
            //  *******
            //     /
            // *********

}
