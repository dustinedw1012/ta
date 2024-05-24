var map = L.map('map').setView([-6.87, 108], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var url_to_geotiff_file = "ProdukDustinR.tif";
var currentLayer = null; // Variable to store the current layer

fetchAndRenderGeoTIFF(url_to_geotiff_file);

// Define the fetch and render function
function fetchAndRenderGeoTIFF(url) {
    fetch(url)
        .then(response => response.arrayBuffer())
        .then(arrayBuffer => {
            parseGeoraster(arrayBuffer).then(georaster => {
                console.log("georaster:", georaster);

                const layer = new GeoRasterLayer({
                    georaster: georaster,
                    opacity: 0.8, // Adjust transparency as needed

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

                // Remove the existing layer if it exists
                if (currentLayer) {
                    map.removeLayer(currentLayer);
                }

                // Add the new layer to the map
                layer.addTo(map);
                currentLayer = layer;

                // Fit the map to the new layer's bounds
                map.fitBounds(layer.getBounds());
            });
        })
        .catch(error => console.error('Error fetching or parsing GeoTIFF:', error));
}

document.addEventListener('DOMContentLoaded', function() {
    let selectedTab = '';

    const tabButtons = document.querySelectorAll('button[role="tab"]');
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            selectedTab = this.id;
            console.log(`Selected tab ID: ${selectedTab}`);
            if (selectedTab === "itensitas-kekeringan") {
                url_to_geotiff_file = "ProdukDustinR.tif";
                fetchAndRenderGeoTIFF(url_to_geotiff_file);
            } else if (selectedTab === "ekosistem-karbon") {
                url_to_geotiff_file = "NORMNDVI2010.tif";
                fetchAndRenderGeoTIFF(url_to_geotiff_file);
            }
            console.log(url_to_geotiff_file);
        });
    });
});