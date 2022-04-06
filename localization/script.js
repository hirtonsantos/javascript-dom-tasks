// navigator.geolocation.watchPosition((sucess) => {
//     console.log("altitude", sucess.coords.altitude)
//     console.log("latitude", sucess.coords.latitude)
// }, (error) => {
//     console.log(error)
// })

let h2 = document.querySelector('h2');
var map;

function success(pos){
    console.log(pos.coords.latitude, pos.coords.longitude);
    h2.textContent = `Latitude:${pos.coords.latitude}, Longitude:${pos.coords.longitude}`;

    if (map === undefined) {
        map = L.map('mapid').setView([-22.5423, -43.1021], 13);
    } else {
        map.remove();
        map = L.map('mapid').setView([-22.5423, -43.1021], 13);
    }

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([-22.5423, -43.1021]).addTo(map)
        .bindPopup('Eu estou aqui!')
        .openPopup();
}

function error(err){
    console.log(err);
}

var watchID = navigator.geolocation.watchPosition(success, error, {
    enableHighAccuracy: true,
    timeout: 5000
});