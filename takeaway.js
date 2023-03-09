// write a function that generates every sequence
// a single player could throw over a 3-round game
// of rock-paper-scissors
//

const rps = numRounds => {
    let results = [];
    let plays = ['rock', 'paper', 'scissors'];

    const outCome = (roundsLeft, result) => {
        if (roundsLeft === 0) {
            results.push(result);
            return;
        }
        plays.forEach (function(play){
            outCome(roundsLeft - 1, result.concat(play))
        })
    }
    outCome(numRounds, []);
    return results
}

console.log(rps(3))