//map initialization
var map = L.map('map',
{
maxZoom:7, minZoom:4
})
.setView([-1.344321, 117.096827], 5);
map.removeControl(map.zoomControl);
map.setMaxBounds(map.getBounds());
// map.createPane('left');
// map.createPane('right');

//basemap 
 var Esri_WorldTerrain = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}', {
 attribution: 'Tiles &copy; Esri &mdash; Source: USGS, Esri, TANA, DeLorme, and NPS',
 }); 
Esri_WorldTerrain.addTo(map);

//skala
L.control.scale(
  {
    metric: true,
    imperial: true,
    position: 'bottomright',
    maxWidth : 200
  }
).addTo(map);

//layer 1
var layer_1 ="./data/kuartil3_0.png",
    imageBounds_1 = 
    [[-10.929653167724613,95.21094703674322],
    [5.913758409516426,141.00706022115645]];
// L.imageOverlay(layer_1, imageBounds_1)
// .addTo(map);

// Tekanan Sosio-Ekonomi
var layer_2 ="./data/Norm_HPI.jpg",
    imageBounds_2 = 
    [[-5.914478, 106.370506],
    [-7.823398,108.831890]];
L.imageOverlay(layer_2, imageBounds_2)
.addTo(map);




