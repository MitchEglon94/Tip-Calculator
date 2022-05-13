const billAmount = document.getElementById("bill-amount");
const total = document.getElementById("total");
const peopleNumber = document.getElementById("people-number");
const tip = document.getElementById("tip");
const tipTiles = document.querySelector(".tip-tiles");
const customTip = document.getElementById("custom-tip");
const resetBtn = document.getElementById("reset-btn");
let pax = 1;
let billValue = 0;
let tipValue = 0;

function reset() {
  billValue = 0;
  billAmount.value = null;
  peopleNumber.value = null;
  customTip.value = null;
  total.textContent = `$0.00`;
  tip.textContent = `$0.00`;
  tipValue = 0;
  pax = 1;
}

tipTiles.addEventListener("click", (e) => {
  if (e.target.id === "custom-tip") {
    customTip.addEventListener("input", (e) => {
      tipValue = parseInt(e.target.value) / 100;
      tip.textContent = `$${parseFloat(billValue * tipValue).toFixed(2)}`;
      total.textContent = `$${parseFloat(
        billValue * tipValue + billValue
      ).toFixed(2)}`;
    });
  } else {
    tipValue = parseInt(e.target.id) / 100;
    tip.textContent = `$${parseFloat(billValue * tipValue).toFixed(2)}`;
    total.textContent = `$${parseFloat(
      billValue * tipValue + billValue
    ).toFixed(2)}`;
  }
});

billAmount.addEventListener("input", (e) => {
  console.log(e.target.value);
  if (e.target.value !== "") {
    billValue = Number(e.target.value);
    console.log(typeof billValue);
    total.textContent = `$${billValue.toFixed(2)}`;
  } else {
    reset();
  }
});

peopleNumber.addEventListener("input", (e) => {
  pax = parseInt(e.target.value);
  tip.textContent = `$${parseFloat((billValue * tipValue) / pax).toFixed(2)}`;
  total.textContent = `$${parseFloat(
    (billValue * tipValue + billValue) / pax
  ).toFixed(2)}`;
});

resetBtn.addEventListener("click", () => {
  reset();
});
