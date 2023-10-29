//business logic
function gallonToliter(g) {
    return g * 3.785;
}

function literTogallon(l) {
    return l / 3.785;
}

//user interface logic
const g = prompt("Enter a gallon:");
const l = prompt("Enter a liter:");

window.alert("gallon to liter: " + gallonToliter(g) + ".\n" +
    "liter to gallon: " + literTogallon(l).toFixed(3) + ".");