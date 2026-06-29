let height = 5;

for (let row = 1; row<= height; row++){
    let spaceTracker="";
    let starTracker = "";
    let output = "";
    
    spaceTracker += " ".repeat(height-row);

    starTracker += "*".repeat(2 * row - 1);

    output = spaceTracker + starTracker;

    console.log(output);
}
