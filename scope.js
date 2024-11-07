let bonus = 20;
function sum(first, second){
    let result = first + second + bonus;
    //console.log(result);
    if(result > 9){
        var mood = 'happy';
        mood = 'unhappy';
        mood = 'wicket';
        mood = 'sad';
        //console.log(mood);
    }
    return result;
}
console.log(mood);
const output = sum(3,7);

//console.log(output);