var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/weresquirrels');

var Colonies = db.get('colonies');
var Unibears = db.get('unibears');
var Weresquirrels = db.get('weresquirrels');
var Duels = db.get('duels');
var UnibearAgreements = db.get('unibearAgreements');
var WeresquirrelAgreements = db.get('weresquirrelAgreements');
var WeresquirrelStats = db.get('weresquirrelStats');

/* GET users listing. */

var JoinColoniesDuels = function (colonies, duels) {
  colonies.forEach(function (colony) {
    colony.duelsWon = [];
    duels.forEach(function (duel) {
      if (colony._id.toString() === duel.won.toString()) {
        colony.duelsWon.push(duel);
      }
    });
  });
  return colonies;
}


router.get('/', function(req, res, next) {
  Colonies.find({}).then(function (colonies) {
    return Duels.find({}).then(function (duels) {
      JoinColoniesDuels(colonies, duels);
      res.render('colonies/home', {allColonies: colonies});
    });
  });

});
module.exports = router;



// .then(function (duelResults) {
//     result['duels'] = duelResults;
//     console.log(result);
//   });

// router.get('/', function(req, res, next) {
//   var result = {};
//   Colonies.find({}).then(function (colonies) {
//     result['colonies'] = colonies;
//     var promises = colonies.map(function (colony) {
//       return Duels.find({ $or: [ { first_colony: colony._id }, { second_colony: colony._id  } ] }).then(function (duels) {
//         return duels;
//       });
//     });
//     return Promise.all(promises);
//   });
// });
// module.exports = router;