let input = document.querySelector("#dobtype");
let result = document.querySelector(".count");
let button = document.querySelector("#cal-btn");


button.addEventListener("click",()=>{
// let input;
let birthdate = new Date(input.value);
let currentdate = new Date();
let calculated = new Date(currentdate-birthdate);

let years = calculated.getFullYear()-1970;
let months = calculated.getMonth();
let dates = calculated.getDate();

result.innerHTML = `You're ${years}years ${months}months ${dates}days old`

})



































// input.addEventListener("input",()=>{
//     let birthdate = new Date(input.value)
//     let currentdate = new Date();
//     let calculated = new Date(currentdate-birthdate);

//     let years = calculated.getFullYear()-1970;
//     let months = calculated.getMonth();
//     let days = calculated.getDate();

//     result.innerHTML = `You're ${years}Years ${months}months ${days}days old`
// }) You're_19 Years_months_days old
