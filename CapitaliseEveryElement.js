var pizzaToppings = ['cheese','pepperoni','chicken','sausage','philly steak','beef','tomatoes','onions','peppers','spinach','pineapples'];
var newArr = pizzaToppings.map(converted);

function converted(i){    
        return i.charAt(0).toUpperCase()+i.substr(1);
}
console.log(newArr);
