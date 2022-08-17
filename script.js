const API_KEY = "c3e169d224a28c41ec41bd02424a2ccf";

function getValue() {
  let cityName = document.getElementById("valueInput").value;
  let resetVal = document.getElementById("valueInput");
  let API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=imperial`;

  axios.get(API_URL).then((response) => {
    console.log(response.data);
    // let tempUpdate = document.getElementById("numberText1");
    // let badgeText = document.getElementById("badgeText2");
    let addCard = document.getElementById("addCard");
    let nameCity = response.data.name;
    let temp = response.data.main.temp;
    let country = response.data.sys.country;
    let tempNumber = Number(Math.ceil(temp));
    let icon = response.data.weather[0].icon;
    let description = response.data.weather[0].description;
    let iconImage = `contents/weather/${icon}.png`;

    const li = document.createElement("li");
    li.classList.add("col-3");
    const weatherCard = ` 
   <div class="">
    <div class="card" style="width: 16rem">
      <div class="card-body">
        <h6 class="card-title  cardss ms-2 mt-3 text-center">
          <Span class="cardTitle">${nameCity}</Span><sup
          id="badgeText2"
            class="badge rounded-pill bg-primary badgeText ms-2"
            >${country}</sup
          >
        </h6>
        <p  class="card-text numberText numberText1 text-center mb-0">
          <Span id="numberText1" class="numberText">${tempNumber}</Span><sup>&#176;F</sup>
        </p>
        <div class="weatherImg mx-auto">
          <img
            src="${iconImage}"
            class="img-thumbnail"
            alt="..."
          />
        </div>
        <p class="card-text text-center mb-0 bottomText mt-2">${description}</p>
      </div>
    </div>
   `;
    li.innerHTML = weatherCard;
    addCard.appendChild(li);
  });

  resetVal.value = "";
}
