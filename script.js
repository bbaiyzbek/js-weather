 const btn = document.querySelector('.btn')
 const input = document.querySelector('#input')
 const city = document.querySelector('.city')
 const temp = document.querySelector('.temp')
 const country = document.querySelector('.country')
 const humidity = document.querySelector('.humidity')
 const wind = document.querySelector('.wind')
 const weatherIcon = document.querySelector('.weather-icon')

async function checkWeather(){
const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=312090a02eb94603921111030233107&q=${input.value}`)
    let data = await response.json()
    city.innerHTML = data.location.name
    country.innerHTML = data.location.country
    temp.innerHTML = `${data.current.temp_c}°C`
    humidity.innerHTML = `${data.current.humidity}%`
    wind.innerHTML = `${data.current.wind_kph}km/h`
    weatherIcon.src = data.current.condition.icon
    console.log(data)
}

btn.addEventListener('click', () => {
    checkWeather(input.value)
})