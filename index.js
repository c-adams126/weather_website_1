function con(tem){
  let p = tem - 273;
  let t = 1.8 * p;
  let a = t + 32;
  return a;
}
window.addEventListener('load', ()=> {
  let long;
  let lat;
  let n = document.querySelector('.place');
  let picon = document.getElementById('p_icon');
  let temperture_degree = document.querySelector('.temp-degree');
  let temperture_description = document.querySelector('.temp-descript');
  
  

  if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position =>{
        long = position.coords.longitude;
        lat = position.coords.latitude;
        
        const proxy = `https://cors-anywhere.herokuapp.com/`;
        const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=d4bd2b51dbd65185a11f9cb95c20ff47`;
        fetch(api)
        .then(response =>{
          return response.json();
        })
        .then(data => {
          console.log(data);
          console.log(data.weather[0].description);
          let tempcon = data.main.temp;
          let fh = Math.floor(con(tempcon));
          console.log(fh);
          let c = data.weather[0].id;
          console.log(c);
          setPic(c);
          n.textContent = data.name;
          temperture_degree.textContent = fh;
          temperture_description.textContent = data.weather[0].description;
        });
        
      });
  }
  function setPic(num){
    if(num >= 200 && num < 233){
      document.getElementById('icon').src = "./weather/amcharts_weather_icons_1.0.0/animated/thunder.svg";
    }else if(num >= 300 & num <322) {
      document.getElementById('icon').src = "./weather/amcharts_weather_icons_1.0.0/animated/rainy-3.svg";
    } else if(num >= 500 && num < 532){
      document.getElementById('icon').src = "./weather/amcharts_weather_icons_1.0.0/animated/rainy-5.svg";
    }else if(num >= 600 && num < 623){
      document.getElementById('icon').src = "./weather/amcharts_weather_icons_1.0.0/animated/snowy-4.svg";
    }else if(num >=701 && num < 782) {
      document.getElementById('icon').src = "https://loading.io/icon/bd8a5b";
    }else if(num == 800){
      document.getElementById('icon').src = "./weather/amcharts_weather_icons_1.0.0/animated/day.svg";
    }else {
      document.getElementById('icon').src = "./weather/amcharts_weather_icons_1.0.0/animated/cloudy.svg";
    }
  }
});