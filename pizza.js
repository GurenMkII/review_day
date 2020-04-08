var pizzaToppings = ['cheese','pepperoni','chicken','sausage','philly steak','beef','tomatoes','onions','peppers','spinach','pineapples'];
function makePizza(a,b,c,d){
    var pizzaOrder = ["You ordered a delicious pizza with "+pizzaToppings[a]+', '+pizzaToppings[b]+', '+pizzaToppings[c]+' and '+pizzaToppings[d]+'!'];
    console.log(pizzaOrder.toString());
}
makePizza(0,2,4,9);