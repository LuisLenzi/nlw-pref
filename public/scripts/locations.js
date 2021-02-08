const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}
const map = L.map('mapid', options).setView([-21.756268, -45.539798], 15);
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
    popupAnchor: [150, 2]
})
L.marker([-21.756268, -45.539798], {icon}).addTo(map)
    .openPopup();

function selectImage(event) {
    const button = event.currentTarget
    console.log(button.children)
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)
    function removeActiveClass(button){
        button.classList.remove('active')
    }   
    const image = button.children[0]
    const imageContainer = document.querySelector(".location-details > img")
    imageContainer.src = image.src
    button.classList.add('active')
}