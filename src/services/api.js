const axios = require('axios');

const getWeatherInfo = async () => {
    const res = await axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=60.99&lon=30.9&appid=90a6a32ef837946def16d922074d4fc7');

    const dayInfo = res.data.current;
    const weekInfo = res.data.daily;
    console.log(dayInfo);
    console.log(weekInfo);
}

getWeatherInfo();