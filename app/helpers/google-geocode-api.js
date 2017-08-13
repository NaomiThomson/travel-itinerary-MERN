var axios = require('axios');
var location = '25 Via Lucca Irvine';
var query = `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=AIzaSyAr02UkNoe3UCCVrkyMNFWKA_PtseA-9gc`;

var getCoords = function() {
  axios.get(query)
    .then((res) => {
      console.log(res.data.results[0].geometry.location);
    })
    .catch((err) => {
      console.log(err)
    })
}


module.exports = getCoords;



