const map = L.map('mapid').setView([-21.756268, -45.539798], 15);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibHVpc2xlbnppIiwiYSI6ImNranl4NjB2dTAxejgycHBpbzd4ZDV5cW4ifQ.Yr-97_3ndxQP1rUvtUcqiw'
}).addTo(map);

const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [50, 60],
    iconAnchor: [20, 50],
})

let marker;

map.on("click", (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;
    document.querySelector("[name=lat]").value = lat;
    document.querySelector("[name=lng]").value = lng;
    marker && map.removeLayer(marker)
    marker = L.marker([lat, lng], {icon})
    .addTo(map)
})

function addPhotoField(){
    const container = document.querySelector("#images")
    const fieldsContainer = document.querySelectorAll(".new-upload")
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    const input = newFieldContainer.children[0]
    if(input.value == ""){
        return
    }
    newFieldContainer.children[0].value = ""
    container.appendChild(newFieldContainer)
}

function deleteField(event){
    const span = event.currentTarget
    const fieldsContainer = document.querySelectorAll(".new-upload")
    if(fieldsContainer.length < 2){
        span.parentNode.children[0].value = ""
        return
    }
    span.parentNode.remove();
}