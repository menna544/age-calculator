//input
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");
//output
const dayCalc = document.getElementById("DD");
const monthCalc = document.getElementById("MM");
const yearCalc = document.getElementById("YY");
//currentdate
const date = new Date();
let dayEntered = date.getDate();
let monthEntered = date.getMonth() + 1;
let yearEntered = date.getFullYear();
const form = document.querySelector("form");
const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function validation() {
    const input = document.querySelectorAll("input");
    let valid = true;
    input.forEach((block) => {
        if (day.value > 31) {
            day.style.borderColor = "red";
            day.parentElement.querySelector("small").innerHTML = "Enter valid day ";
            valid = false;
        } else if (month.value > 12) {
            month.style.borderColor = "red";
            month.parentElement.querySelector("small").innerHTML = "Enter valid month ";
            valid = false;
        } else if (!block.value) {
            block.style.borderColor = "red";
            block.parentElement.querySelector("small").innerHTML = "this field is required"
            valid = false
        }
        block.style.borderColor = "black";
        block.parentElement.querySelector("small").innerHTML = " ";
        valid = true;
    });
    return valid;
}
function handleSubmit(e) {
    e.preventDefault();
    if (validation()) {
        if (day.value > day) {
            dayEntered = dayEntered + months[monthEntered - 1];
            monthEntered = monthEntered - 1;
        }
        if (month.value > monthEntered) {
            monthEntered = monthEntered + 12;
            yearEntered = yearEntered - 1;
        }
        const dd = dayEntered - day.value;
        const mm = monthEntered - month.value;
        const yy = yearEntered - year.value;

        dayCalc.innerHTML = dd;
        monthCalc.innerHTML = mm;
        yearCalc.innerHTML = yy;
    }
}
form.addEventListener("submit", handleSubmit);
