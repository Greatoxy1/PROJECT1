function toggleContent() {
    var content = document.getElementById("content");
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}
function showInfo() {
    document.getElementById('info').style.display = 'block';
}
async function getWeather() {
    const location = document.getElementById('Berlin').value;


    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.cod === 200) {
            document.getElementById('weather-container').innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
        } else {
            document.getElementById('weather-container').innerHTML = `<p>${data.message}</p>`;
        }
    } catch (error) {
        document.getElementById('weather-container').innerHTML = `<p>Unable to fetch weather data.</p>`;
       
    const apiKey =["s7wdm7ovkypadk8vf4rxe961mph99kob8voibz9p"];
    const url="(curl -X 'GET' \ 'https://www.meteosource.com/api/v1/free/point?place_id=Berlin&lat=50&lon=50&sections=current%2Cdaily&language=en&units=auto&key=s7wdm7ovkypadk8vf4rxe961mph99kob8voibz9p' \ -H 'accept: application/json)";
    }
    async function fetchTime() {
        const display = [".btn-save", ".btn-save:hover", ];
    const timezone = document.getElementById('timezone').value;
    const response = await fetch(`https://worldtimeapi.org/api/timezone/${timezone}`);
    const data = await response.json();
    document.getElementById('datetime').innerText = `Current Time in ${timezone}:\n${data.datetime}`;
}

window.onload = fetchTime;
}

