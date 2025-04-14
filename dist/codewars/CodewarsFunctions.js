"use strict";
// Link for this resolution: https://www.codewars.com/kata/5b0d67c1cb35dfa10b0022c7
function squaresNeeded(totalGrains, squareIndex = 0, totalAccumulated = 0, grainsOnCurrentSquare = 1) {
    debugger;
    if (totalGrains <= 0)
        return 0;
    if (totalAccumulated >= totalGrains)
        return squareIndex;
    return squaresNeeded(totalGrains, squareIndex + 1, totalAccumulated + grainsOnCurrentSquare, grainsOnCurrentSquare * 2);
}
