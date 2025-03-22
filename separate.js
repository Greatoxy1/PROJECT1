function toggleContent() {
    var content = document.getElementById("content");
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

async function getWeather() {
    const location = document.getElementById('Berlin').value;
    const apiKey = 'bmipqdoya1z88htko8vff1rfwz4w5s02v1vo1bpe';
    const url = `hrce.com/api/v1/free/point?place_id=berlin&sections=current%2Cdaily&language=en&units=auto&key=${apiKey}`;


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
    }

    async function fetchTime() {
    const timezone = document.getElementById('timezone').value;
    const response = await fetch(`https://worldtimeapi.org/api/timezone/${timezone}`);
    const data = await response.json();
    document.getElementById('datetime').innerText = `Current Time in ${timezone}:\n${data.datetime}`;
}

window.onload = fetchTime;
}