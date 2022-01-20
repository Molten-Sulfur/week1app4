var map = L.map('mapid').setView([21, 50], 5);

var markerQatar = L.marker([25, 51]).addTo(map);

var markerBAM = L.marker([12.5, 43.5]).addTo(map);

var circle = L.circle([12.5, 43.5], {
    color: 'orange',
    fillColor: '#d60',
    fillOpacity: 0.4,
    radius: 130000
}).addTo(map);

circle.bindPopup("What's around the BAM");
markerQatar.bindPopup("Qatar");
markerBAM.bindPopup("This is the Bab Al Mendab");

var Stamen_Watercolor = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 1,
	maxZoom: 15,
	ext: 'jpg'
}).addTo(map);
