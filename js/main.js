const userKm = Number(prompt("Quanti kilometri vuoi percorrere?"));
const userAge = Number(prompt("Quanti anni hai?"));
let price = userKm * 0.21;
let discount;
if (userAge < 18) {
    discount = price * 0.2
} else if (userAge >= 65) {
    discount = price * 0.4
} else {
    discount = 0
}

let priceDiscount = (price - discount).toFixed(2);

document.getElementById("price").innerHTML = "Il prezzo del suo biglietto è: " + (priceDiscount)