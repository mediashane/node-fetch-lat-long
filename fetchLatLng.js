const axios = require('axios');

fetchLatLng = async(address) => {
    try {
        const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyCUmrSg84NOZWJ4qaSkMeyaltk1U2-XybM&address=${address}`);

        if (response.data.status === 'ZERO_RESULTS') {
          console.log('Unable to find that address.')
        } else if (response.data.status === 'OK') {

          const { lat, lng } = response.data.results[0].geometry.location;
          
          console.log(JSON.stringify(`Lat: ${lat}, Long: ${lng}`));
        }

    } catch (error) {
      console.log('Unable to connect to Google servers.');
    }
};

fetchLatLng(encodeURIComponent('00000'));

