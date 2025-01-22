let price = +prompt("Product ki price kya hai?");
let membership = prompt("Aapki membership kya hai? (Gold/Platinum)");

if (membership === "gold" || membership === "platinum") {
    if (price >= 1000) {
        alert("Aapko discount mil raha hai!");
    }
}
