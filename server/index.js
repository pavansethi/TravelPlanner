
const express = require('express');
const bodyParser = require('body-parser');

// var GooglePlaces = require('google-places');
const items = require('../database-mongo');
const request = require('request');
const app = express();
const hotel = require('./hotel/hotel')



// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
<<<<<<< HEAD
=======
const items = require('../database-mongo');
const yelp = require('./yelp/yelp')
>>>>>>> yelp attraction search works for POST

const yelp = require('./yelp')


// UNCOMMENT FOR REACT

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.urlencoded({ extended: false }));

// var places = new GooglePlaces('AIzaSyDM-RnDOk60Kj_ZJ2xUx29RrZKnutnI2UI');
// places.search({keyword: 'Vermonster'}, function(err, response) {
//   console.log("search: ", response.results);

//   places.details({reference: response.results[0].reference}, function(err, response) {
//     console.log("search details: ", response.result.website);
//     // search details:  http://www.vermonster.com/
//   });
// });
// var parameters = {
//       location: '-33.8670522,151.1957362',
//       radius: '500',
//       type: 'restaurant',
//       key:'AIzaSyDM-RnDOk60Kj_ZJ2xUx29RrZKnutnI2UI'
//     }
app.post('/attraction', function(req,res){

  var searchCity = '';

  req.on('data', function(chunk){
    searchCity += chunk;
  })


  req.on('end', function(searchCity){

  })

})

  
  req.on('end', function(){
    
    yelp.searchAttr(searchCity, function(){
      res.sendStatus(200);
      res.end();
      console.log('GOT STH for POST!!!')
    })


app.get('/search', (req, res) => {
	console.log(req.query.city);
  // var city = req.query.city;



  hotel.hotel(req.query, (data) => {
    res.end(JSON.stringify(data))
  })
	// var query = req.query;
	// request(req.query, (err, res, body) => {
 //      // let result = JSON.parse(body)
 //      // console.log(result.results[0].photos)
 //      console.log(body);
	// })
})
app.get('/items', function (req, res) {

})

app.get('/attraction', function (req, res) {

  items.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(5000);
    } else {
      res.json(data);
    }
  });
});

var port = process.env.PORT;
app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
