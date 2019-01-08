const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }

}).argv;

let getInfo = async(direccion) => {
    try {
        let coors = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coors.lag, coors.lng);
        return `El clima en ${coors.direccion} es de ${temp}`;

    } catch (error) {
        return `No se pudo determinar el clima en ${direccion}`;
    }

}

getInfo(argv.direccion)
    .then(mensaje => {
        console.log(mensaje)
    })
    .catch(error => {
        console.log(error);
    })

// lugar.getLugarLatLng(argv.direccion)
//     .then(resp => {
//         console.log(resp);
//     })
//     .catch(err => {
//         console.log(err);
//     })
//     // console.log(argv)


// clima.getClima(9.9280694, -84.0907246)
//     .then(resp => {
//         console.log(resp);
//     })
//     .catch(err => {
//         console.log(err);
//     })