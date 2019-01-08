const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    let encodedUrl = encodeURI(direccion)
        // axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=San Jose Costa Rica&key=AIzaSyCFvb1yFIGUknZbHX5Fhrm_rOP3e3t8fls`)
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyDm4Z99DIBP_psSkGGKvq4tewzOO363mxE`)

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hya resultados para la ciudad ${direccion}`);
    }
    console.log(resp.data);
    let location = resp.data.results[0];
    let coors = location.geometry.location;
    // console.log(location);
    // // console.log(JSON.stringify(resp.data, undefined, 2));
    // console.log('Direccion', location.formatted_address);
    // console.log('lat', coors.lat);
    // console.log('lng', coors.lng);

    return {
        direccion: location.formatted_address,
        lag: coors.lat,
        lng: coors.lng
    }
}

module.exports = {
    getLugarLatLng
}