var input_currency = document.querySelector(".input_currency");
var output_currency = document.querySelector(".output_currency");
var input_amount = document.querySelector("#input_amount");
var btn = document.querySelector(".btn");
var para1 = document.getElementById("para1");
var para2 = document.getElementById("para2");

var output = document.querySelector("#output_amount");
btn.addEventListener("click", () => {
 
  let url = "https://api.exchangerate-api.com/v4/latest/";
  async function currency(x) {
    try {
      let data = await fetch(x + input_currency.value);

      let response = await data.json();

      let rate = await response.rates[output_currency.value];
      para2.innerHTML = "1 "+input_currency.value+" = "+rate+" "+output_currency.value;
      para1.innerHTML = (input_amount.value * rate).toFixed(2);
    } catch (err) {
      console.error(err);
    }
  }
  currency(url);
});