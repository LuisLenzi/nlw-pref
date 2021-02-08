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
    popupAnchor: [150, 2]
})

const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeigth: 240
}) .setContent('Pref. Mons. Paulo <a href="/locations?id=1" class="choose-construction"> <img src="/images/arrow-white.svg"> </a>')

L.marker([-21.756268, -45.539798], {icon}).addTo(map)
    .bindPopup(popup)
    .openPopup();