let age = +prompt("Aapki umar kya hai?");
let gradeLevel = +prompt("Aap kis grade mein hain?");
let gpa = +prompt("Aapka GPA kya hai?");

if (age >= 17) {
    if (gradeLevel === 11 || gradeLevel === 12) {
        if (gpa >= 3.5) {
            alert("Aap scholarship ke liye eligible hain!");
        }
    }
}
