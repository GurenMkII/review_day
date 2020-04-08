function sandwichCalculator(slicesOfBread, slicesOfCheese){
var sandwiches = (slicesOfBread-slicesOfBread%2)/2;
if ((slicesOfCheese < slicesOfBread) && (slicesOfCheese != 0)){
    sandwiches = slicesOfCheese
    console.log(sandwiches);
    return sandwiches;
} else if ((slicesOfCheese < 1) || (slicesOfBread < 2)){
    console.log("Not enough cheese or bread.");
} else console.log(sandwiches);



}
sandwichCalculator(1,4);