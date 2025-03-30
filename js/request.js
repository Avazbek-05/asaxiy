let BASE_URL = "https://67dbc1c61fd9e43fe475c093.mockapi.io/";

const useFetch = () => {
  const response = ({ url, method = "GET", data }) => {
    return fetch(`${BASE_URL}/${url}`, {
      method,
      headers: { "Content-Type": "application/json" },
      body: data,
    })
      .then((data) => data.json())
      .catch((error) => console.log(error));
  };
  return response;
};

function addUIData(value,cards) {
  cards.innerHTML += `
  <div
    class="card shadow-[0_10px_30px_0_rgba(209,213,223,0.5)] p-4 rounded-2xl relative transition-all duration-300 hover:shadow-[0_15px_40px_0_rgba(209,213,223,0.8)] hover:scale-105 hover:border hover:border-[#00BFaf]"
  >
    <div class="flex flex-col items-center justify-center">
      <img
        class="w-[160px] h-[160px]"
        src="${value.img}"
        alt="${value.title}"
      />
    </div>
    <div class="flex flex-col items-center gap-1 absolute right-3 top-14">
      <i class="fa-regular hover:text-[red] text-xl fa-heart"></i>
      <img
        class="w-6 h-6"
        src="./imgs/img/Сравнение.png"
        alt="Сравнение"
      />
    </div>
    <div>
      <h2 class="text-[14px] p-[15px_0_19px_0]">
       ${value.title.slice(0, 50) + "..."}
      </h2>
      <div class="flex items-center justify-between">
        <span class="flex items-center gap-1">
          <i class="fa-solid text-fire-orange fa-star"></i>
          <i class="fa-solid text-fire-orange fa-star"></i>
          <i class="fa-solid text-fire-orange fa-star"></i>
          <i class="fa-solid text-fire-orange fa-star"></i>
          <i class="fa-solid text-fire-orange fa-star"></i>
        </span>
        <p class="text-[12px] font-medium text-soft-steel">${value.rate}</p>
      </div>
      <p class="pt-2 line-through text-[#94a3b8]">${value.oldPrice ?? ""}</p>
      <h1 class="text-vivid-blue text-lg font-bold p-[17px_0_8px_0]">
       ${value.price.toLocaleString("ru-RU") + " сум"} 
      </h1>
      <div
        class="p-[5px_10px] border-2 border-fire-orange transition-all duration-500 text-fire-orange text-[16px] rounded-md hover:bg-fire-orange hover:text-white"
      >
        ${value.moth.toLocaleString("ru-RU") + " сум x 12 мес"}
      </div>
    </div>

    <div class="flex items-center gap-1 justify-between pt-8">
      <button
        class="text-white text-[13px] bg-vivid-blue p-[10px_20px] rounded-xl relative overflow-hidden transition-all duration-500 before:absolute before:top-0 before:right-full before:w-full before:h-full before:bg-[blue] before:transition-all before:duration-200 hover:before:right-0"
      >
        <span class="relative z-10"> Купить в один клик</span>
      </button>
      <button id=${
        value.id
      } class="btn_shop bg-turquoise-blue p-[5px_13px] rounded-lg">
        <img  src="./imgs/img/korzinka.png" alt="korzinka" />
      </button>
    </div>
  </div>
`;
}


export { useFetch, addUIData };
