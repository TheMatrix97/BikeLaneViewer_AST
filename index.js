const express = require('express');
const path = require('path');
const { default: axios } = require('axios');

const app = express();
const port = 3000;

// Endpoint to serve GeoJSON data
app.get('/data', async (req, res) => {
    // Get GeoJSON file from opendata bcn
    try {
        const response = await axios.get('https://opendata-ajuntament.barcelona.cat/resources/bcn/CarrilsBici/CARRIL_BICI.geojson');
        res.json(response.data)
    }catch (error){
        console.error('Error Fetching api', error);
        res.status(500).send('Error Fetching JSON from API')
    }
});

// Serve HTML page with Leaflet map
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static' ,'map.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});
