// initialize leaflet map
var map = L.map('map').setView([-6.87, 108], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
 maxZoom: 19,
 attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var url_to_geotiff_file = "NORMNDVI2010.tif";

fetch(url_to_geotiff_file)
  .then(response => response.arrayBuffer())
  .then(arrayBuffer => {
    parseGeoraster(arrayBuffer).then(georaster => {
      console.log("georaster:", georaster);

      /*
          GeoRasterLayer is an extension of GridLayer,
          which means can use GridLayer options like opacity.

          Just make sure to include the georaster option!

          http://leafletjs.com/reference-1.2.0.html#gridlayer
      */
 // Example of defining the custom raster layer with no-data handling and red gradient
 const layer = new GeoRasterLayer({
georaster: georaster,
opacity: 0.7, // Adjust transparency as needed

// Function to map raster pixel values to colors
pixelValuesToColorFn: function (values) {
  // Log the values for debugging purposes
  console.log('Raster pixel values:', values);

  // Assuming a single band raster, fetch the first value
  const value = values[0];

  // Handle no-data value (assumed to be 0)
  if (value === 0) {
    return null; // Make the pixel transparent for no-data values
  }

  // Normalize the values to create a gradient from dark to bright red
  const minVal = 0; // Replace with your dataset's known minimum value
  const maxVal = 1; // Replace with your dataset's known maximum value

  // Avoid division by zero if min and max values are the same
  const normalizedValue = (value - minVal) / (maxVal - minVal || 1);

  // Scale the normalized value to a range of 0 to 255
  const redValue = Math.floor(normalizedValue * 255);

  // Return the color as a string
  const color = `rgb(${redValue}, 0, 0)`;
  return color;
}
});

layer.addTo(map);
      map.fitBounds(layer.getBounds());

  });
});
