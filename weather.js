const API_KEY = "2a9e0a4e569cb87c94ecc7512cc454d4"

function onGeoOk(position) {
  
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log(position, "you live in", lat, lng);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  console.log(url);
  fetch(url).then(response => response.json()).then(data => {
    const weather = document.querySelector("#weather span:first-child")
    const city = document.querySelector("#weather span:last-child")
    city.innerText = data.name;
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}` ;
    })
}

function onGeoError() {
alert(
  "can't find you. No weather for you "
)
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError) //wifi 위치, gps 좌표 등등을 브라우저에서 확인 가능

//https://openweathermap.org/