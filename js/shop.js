let shops = document.querySelector(".shops");
let card = JSON.parse(localStorage.getItem("cards")) || [];
const counter = document.querySelector(".counter");
let total = document.getElementById("total");
let fullTotal = document.getElementById("fullTotal");
function shopsPr() {
  shops.innerHTML = "";
  card.forEach((value) => {
    shops.innerHTML += `
      <div class="shop bg-white shadow-[0_10px_30px_0_rgba(209,213,223,0.9)] p-[16px_30px] max-[500px]:p-4 rounded-xl flex items-center justify-between max-[1000px]:gap-4 max-[1000px]:flex-col">
        <img class="w-[150px] h-[150px]" src="${value.img}" alt="${
      value.title
    }" />
        <div class="flex flex-col gap-2 max-[1000px]:items-center">
          <h1 class="text-[14px] font-medium hover:text-vivid-blue max-[1000px]:text-center">
          ${value.title.slice(0, 50) + "..."}
          </h1>
          <button class="bg-vivid-blue w-fit hover:bg-[blue] p-[8px_16px] rounded-xl text-white max-[1000px]:w-[50%]">
           ${value.name}
          </button>
        </div>
        <div class="flex items-center gap-6">
          <button class="border w-6 h-6 rounded-full flex items-center justify-center " data-id="${
            value.id
          }">
            <i class="fa-solid text-[12px] fa-minus"></i>
          </button>
          <span>${value.count}</span>
          <button class="border w-6 h-6 rounded-full flex items-center justify-center" data-id="${
            value.id
          }">
            <i class="fa-solid text-[12px] fa-plus"></i>
          </button>
        </div>
        <div class="flex flex-col gap-3 max-[1000px]:items-center">
          <h3 class="text-[14px] text-blue-gray line-through">
            ${
              value.oldPrice
                ? value.oldPrice.toLocaleString("ru-RU") + " сум"
                : ""
            }
          </h3>
          <h1 class="text-vivid-blue text-[16px] font-bold">
            ${value.price.toLocaleString("ru-RU") + " сум"}
          </h1>
          <div class="p-[4px_8px] text-[14px] text-fire-orange rounded font-medium border border-fire-orange">
            ${value.moth.toLocaleString("ru-RU") + " сум x 12 мес"}
          </div>
        </div>
        <div class="flex items-center gap-5">
          <i class="fa-regular text-xl cursor-pointer text-blue-gray fa-heart"></i>
          <i class="fa-solid text-xl text-blue-gray active:text-[red] cursor-pointer fa-trash-can" data-id="${
            value.id
          }"></i>
        </div>
      </div>
    `;
  });
}

shops.addEventListener("click", (e) => {
  let id;
  
   if (e.target.closest("button")) {
    id = e.target.closest("button").dataset.id;
  }
  
  if (e.target.classList.contains("fa-trash-can")) {
    id = e.target.dataset.id;
    deleteData(id);
    return;
  }

  if (!id) return;

  if (e.target.classList.contains("fa-plus")) {
    updateCount(id, "plus");
  } else if (e.target.classList.contains("fa-minus")) {
    updateCount(id, "minus");
  }
});


function updateCount(id, action) {
  card = card.map((item) => {
    if (item.id == id) {
      if (action === "plus") {
        item.count++; 
      } else if (action === "minus" && item.count > 1) { 
        item.count--;
      }
    }
    return item;
  });
  
  card = card.filter(item => item.count > 0);
  
  localStorage.setItem("cards", JSON.stringify(card));
  
  shopsPr();
  notData();
  updateCounter();
  subTotal();
  
}

function deleteData(id) {
  card = card.filter((value) => value.id != id);
  localStorage.setItem("cards", JSON.stringify(card));

  shopsPr();
  notData();
  updateCounter();
  subTotal();
}

function notData() {
  if (!card.length) {
    shops.innerHTML = `<div class='flex flex-col items-center justify-center gap-4'>
     <img class='w-[250px] h-[250px]' src="./imgs/img/basket_no.png" alt="basket_no">
     <h2 class='text-2xl font-bold'>В вашей корзине пока нет товаров</h2>
     <p class='text-[16px] font-medium'>Начните с основ или найдите продукт с помощью функции поиска.</p>
        <button
        class="text-white w-fit text-[13px] bg-vivid-blue p-[10px_20px] rounded-xl relative overflow-hidden transition-all duration-500 before:absolute before:top-0 before:right-full before:w-full before:h-full before:bg-[blue] before:transition-all before:duration-200 hover:before:right-0"
      >
       <a class="relative z-10" href="./index.html"> Главное меню</a>
       
      </button>
    
    </div>`;
  }
}

function updateCounter() {
  counter.innerHTML = card.length;
}

document.addEventListener("DOMContentLoaded", () => {
  shopsPr();
  notData();
  updateCounter();
});

function subTotal() {
  let totalPrice = card.reduce(
    (acc, value) => acc + value.price * value.count,
    0
  );
  total.textContent = `${totalPrice.toLocaleString("ru-RU")} so'm`;
  if (totalPrice) {
    let fullTotalPrice = totalPrice + 16000;
    fullTotal.textContent = `${fullTotalPrice.toLocaleString("ru-RU")} so'm`;
  } else {
    fullTotal.textContent = `0 so'm`;
  }
}
subTotal();
