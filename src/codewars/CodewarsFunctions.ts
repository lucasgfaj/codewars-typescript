// Link for this resolution: https://www.codewars.com/kata/5b0d67c1cb35dfa10b0022c7
function squaresNeeded(grains: number, i: number = 0, acc: number = 0, next: number = 1): number {
    if (grains <= 0) return 0;

    if (grains <= acc)
        return i;

    return squaresNeeded(grains, i + 1, acc + next, next * 2);
}
