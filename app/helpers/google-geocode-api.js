var axios = require('axios');

var getCoords = function(location) {
  var query = `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=AIzaSyAr02UkNoe3UCCVrkyMNFWKA_PtseA-9gc`;
  axios.get(query)
    .then((res) => {
      console.log(res.data.results[0].geometry.location);
    })
    .catch((err) => {
      console.log(err)
    })
}

getCoords('Irvine CA');

module.exports = {getCoords};



