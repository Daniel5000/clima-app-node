const axios = require('axios');

const getClima = async(lat, lng) => {
    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=670b6a28855d107aaf86558c4cca149b`)
        // console.log(resp.data.main.temp);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}