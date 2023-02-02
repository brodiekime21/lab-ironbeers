var express = require('express');
var router = express.Router();

const PunkAPIWrapper = require('punkapi-javascript-wrapper')
const punkAPI = new PunkAPIWrapper()



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.hbs', { title: 'Home' });
});

/* GET beer page. */
router.get('/beers', ((req, res, next)=>{
  
  punkAPI
  .getBeers()
  .then(beersFromApi => {
     res.render("beers.hbs",{beersFromApi})
  })
  .catch(error => console.log(error));

}))

router.get('/random-beer', ((req, res, next)=>{
  
  punkAPI
  .getRandom()
  .then(beersFromApi => {
    res.render("random-beer.hbs",{beersFromApi})
  })
  .catch(error => console.log(error));

}))

router.get('/beer/:id', ((req,res,next)=>{
  punkAPI
    .getBeer(req.params.id)
    .then((beersFromApi)=>{
      res.render('beerdetail.hbs',{beersFromApi})
    })
}))

module.exports = router;
