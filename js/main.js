import { useFetch, addUIData } from "./request.js";
const cards = document.querySelector(".cards");
const counter = document.querySelector(".counter");
const request = useFetch();

let cart = JSON.parse(localStorage.getItem("cards")) || [];
updateCounter();
request({ url: "asaxiy" }).then((data) => getData(data));

function getData(data) {
  data.forEach((value) => {
    addUIData(value, cards);
  });
  let buttons = document.querySelectorAll(".btn_shop");
  buttons.forEach((value, idex) => {
    value.addEventListener("click", (e) => {
      addToCard(data[idex]);
    });
  });
}

function addToCard(data) {
  if (cart.find((value) => value.id === data.id)) {
    cart = cart.map((value) => {
      if (value.id === data.id) {
        return { ...value, count: (value.count += 1) };
      }
      return value;
    });
    localStorage.setItem("cards", JSON.stringify(cart));
    return;
  }

 cart=[...cart,{...data,count:1}]
  localStorage.setItem("cards", JSON.stringify(cart));
  updateCounter();
}

function updateCounter() {
  counter.innerHTML = cart.length;
}
