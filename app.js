var map = L.map('mapid').setView([17.3606, 78.4741], 4);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var coords = [[17.3606, 78.4741], [12.93359, 77.68855], [13.0808, 80.2757], [28.4640, 77.0305], [28.6136, 77.2236], [26.25646, 88.18331]]


//rent

rent = ["INR 10000", " INR 15000", " INR 8000", " INR 8000", " INR 12000", " INR 7000"]

//areas

areas = ["100 sq.m", "150 sq.m", "100 sq.m", "200 sq.m", "150 sq.m", "200 sq.m"]

//rooms

rooms = [3, 4, 6, 4, 2, 3]

//Door Images

images = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiE-i-IZLP9XvmziwEtTfOLVW-FsA9u5KmKA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZHk0wQdFOn2HqJMR9Gwwa5-oNYivPFhJnRQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQSUshXBrYBpRQ32dZxzu7zok75n_-cbPolmLHcwybiw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG7pfmSptQrdD6ZfK0WDpbQIvnO5cBbV7HAFtk6vT49g&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMOrUG2GzXezSBeEJabQiKkk-twgzrqFiEEs4q9l0CMA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRlxIF0pUcnDfxg0UrCOclWh90ztjQdnnz_g&usqp=CAU"]

var appart1 = document.querySelector('#appartment1');
var appart2 = document.querySelector('#appartment2');
var appart3 = document.querySelector('#appartment3');
var appart4 = document.querySelector('#appartment4');
var appart5 = document.querySelector('#appartment5');
var appart6 = document.querySelector('#appartment6');

aparts = [appart1, appart2, appart3, appart4, appart5, appart6]

for (let i = 0; i < coords.length; i++) {

    //popups
    var pop = L.popup({
        closeOnClick: true
    }).setContent("<h4>Area: " + areas[i] + "<br/>" + " Rooms: " + rooms[i] + "</h4> <img src='" + images[i] + "' style='height: 100px'>");

    //marker
    var marker = L.marker(coords[i]).addTo(map).bindPopup(pop);

    //labels
    var toollip = L.tooltip({
        permanent: true
    }).setContent(rent[i]);
    marker.bindTooltip(toollip)

    //zoomin

    aparts[i].addEventListener("mouseover", () => {
        map.flyTo(coords[i], 10);
    });


}


