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


router.get('/:id', function(req, res, next) {
  var result = {};
  Colonies.findById(req.params.id).then(function (colony) {
    return WeresquirrelAgreements.find({colonyId: colony._id}).then(function (weresquirrels) {
      return weresquirrels;
    });
  }).then(function (weresquirrels) {
    return weresquirrels.map(function (weresquirrel) {
      return weresquirrel.weresquirrelId;
    })
  }).then(function (weresquirrelIds) {
    return Weresquirrels.find({_id: {$in: weresquirrelIds}}).then(function (weresquirrelDocs) {
      return weresquirrelDocs;
    })
  }).then(function (weresquirrels) {
    var weresquirrelData = [];
    var promises = [];
    weresquirrels.forEach(function (weresquirrel) {
      weresquirrelData.push({name: weresquirrel.name, duels:[]});
      promises.push(WeresquirrelStats.find({weresquirrelId: weresquirrel._id}))
    });
    Promise.all(promises).then(function (weresquirrelStats) {
      weresquirrelStats.forEach(function (duelStats, i) {
        duelStats.forEach(function (duelStat) {
          weresquirrelData[i].duels.push(duelStat);
        });
      });
      result['weresquirrelData'] = weresquirrelData;
      result['unibears'] = [];
      return result;
    }).then(function (result){
      Colonies.findById(req.params.id).then(function (colony) {
        return UnibearAgreements.find({colonyId: colony._id}).then(function (agreements) {
          return agreements;
        })
      }).then(function (agreements) {
        return agreements.map(function (agreement) {
          return agreement.unibearId;
        });
      }).then(function (unibearIds) {
        return Unibears.find({_id: {$in: unibearIds}}).then(function (unibearDocs) {
          return unibearDocs;
        })
      }).then(function (unibears) {
        unibears.forEach(function (unibear) {
          result.unibears.push({ name:unibear.name });
        });
        return result;
      }).then(function (result) {
        res.render('colonies/show', {weresquirrels: result.weresquirrelData, unibears: result.unibears})
      })
    })
  })
})



module.exports = router;














