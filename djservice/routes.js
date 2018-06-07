const express = require("express");
let router = express.Router();
let mongoose = require('mongoose');
require("./db.js")
require("./mong-model.js");

//OKTA

const OktaJwtVerifier = require('@okta/jwt-verifier');
var cors = require('cors');

const oktaJwtVerifier = new OktaJwtVerifier({
    issuer: 'https://dev-639391.oktapreview.com/oauth2/default',
    assertClaims: {
    aud: 'api://default',
  },
});

function authenticationRequired(req, res, next) {
    const authHeader = req.headers.authorization || '';
    const match = authHeader.match(/Bearer (.+)/);
  
    if (!match) {
      return res.status(401).end();
    }
  
    const accessToken = match[1];
  
    return oktaJwtVerifier.verifyAccessToken(accessToken)
      .then((jwt) => {
        req.jwt = jwt;
        next();
      })
      .catch((err) => {
        res.status(401).send(err.message);
      });
  }

  router.get('/secure', authenticationRequired, (req, res) => {
    res.json(req.jwt);
  });

  router.get('/api/messages', authenticationRequired, (req, res) => {
    res.json([{
      message: 'Hello, word!'
    }]);
  });


  //OKTA


router.post("/create", function(req, res) {
    let artist = req.body.newArtist;
    mongoose.model('djs').create(artist, (err, mongo_artist) => {
        if(err) {
            res.send(err)
            // console.log(err)rs
        } else {
            res.send(mongo_artist)
        }
            
    })
})

router.post("/update", function(req, res) {

    let artist = req.body.newArtist;
    let id = req.body.id;
    mongoose.model('djs').update(artist, (err, mongo_artist) => {
        if(err) {
            console.log(err)
        } else {
            res.send(mongo_artist)
        }
    })
})

// router.post('/sync', function(req, res) {
//     let newDB = req.body.state;
//     model.sync(newDB);
//     res.send('yo')
// })


router.post("/remove", function(req, res) {

    let id = req.body;

    mongoose.model('djs').deleteOne(id, (err, mongo_artist) => {
        if(err) {
            console.log(err)
        } else {
            res.send(mongo_artist)
        }
    })
})

router.post("/read_all", function(req, res) {
  
    // let db = model.read_all();
    // res.send(db)
    mongoose.model('djs').find({}, (err, mongo_artists) => {
        if(err) {
            res.send(err)
        } else {
            res.send(mongo_artists)
        }
    })
})

router.post("/:operation", (req, res) => {

    let operation = req.params.operation;
    
});



module.exports = router;