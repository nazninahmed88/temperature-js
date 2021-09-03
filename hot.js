 const API_KEY = `7d6308caafe63845996cd35e7fe955bd`;
 const searchTemperature = () =>{
     const city = document.getElementById('city-name');
     const cityName = city.value
     const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;
    
     fetch(url)
     .then(Response =>Response.json())
     .then(data =>displaycity(data))
 }

    const displaycity = (temperature) =>{
        console.log(temperature)
        const namecity = document.getElementById('city');
        namecity.innerText = temperature.name
        const cityTemp = document.getElementById('city-temp');
        cityTemp.innerText = temperature.main.temp
        const condisoin = document.getElementById('condisoin');
        condisoin.innerText = temperature.weather[0].main
       
        const url = ` http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
        const imgicon = document.getElementById('img-taimnile');
        imgicon.setAttribute('src' ,url);
     }