let likesPakistaniMusic = prompt("Kya aapko Pakistani music pasand hai? (haan/nahin)");
let likesIndianMusic = prompt("Kya aapko Indian music pasand hai? (haan/nahin)");

if (likesPakistaniMusic && likesIndianMusic) {
    alert("Aapke music ka taste toh international hai!");
} else if (likesPakistaniMusic || likesIndianMusic) {
    alert("Aapko ek type ka music pasand hai!");
} else {
    alert("Aapko music pasand nahi!");
}
