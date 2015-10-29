var db = require('monk')('localhost/weresquirrels');

var Colonies = db.get('colonies');
var Unibears = db.get('unibears');
var Weresquirrels = db.get('weresquirrels');
var Duels = db.get('duels');
var UnibearAgreements = db.get('unibearAgreements');
var WeresquirrelAgreements = db.get('weresquirrelAgreements');
var WeresquirrelStats = db.get('weresquirrelStats');

var colony1id = Colonies.id();
var colony2id = Colonies.id();
var colony3id = Colonies.id();
var colony4id = Colonies.id();

var unibear1id = Unibears.id();
var unibear2id = Unibears.id();
var unibear3id = Unibears.id();
var unibear4id = Unibears.id();
var unibear5id = Unibears.id();
var unibear6id = Unibears.id();
var unibear7id = Unibears.id();
var unibear8id = Unibears.id();

var weresquirrel1id = Weresquirrels.id();
var weresquirrel2id = Weresquirrels.id();
var weresquirrel3id = Weresquirrels.id();
var weresquirrel4id = Weresquirrels.id();
var weresquirrel5id = Weresquirrels.id();
var weresquirrel6id = Weresquirrels.id();
var weresquirrel7id = Weresquirrels.id();
var weresquirrel8id = Weresquirrels.id();

var unibearAgreement1id = UnibearAgreements.id();
var unibearAgreement2id = UnibearAgreements.id();
var unibearAgreement3id = UnibearAgreements.id();
var unibearAgreement4id = UnibearAgreements.id();
var unibearAgreement5id = UnibearAgreements.id();
var unibearAgreement6id = UnibearAgreements.id();
var unibearAgreement7id = UnibearAgreements.id();
var unibearAgreement8id = UnibearAgreements.id();

var weresquirrelAgreement1id = WeresquirrelAgreements.id();
var weresquirrelAgreement2id = WeresquirrelAgreements.id();
var weresquirrelAgreement3id = WeresquirrelAgreements.id();
var weresquirrelAgreement4id = WeresquirrelAgreements.id();
var weresquirrelAgreement5id = WeresquirrelAgreements.id();
var weresquirrelAgreement6id = WeresquirrelAgreements.id();
var weresquirrelAgreement7id = WeresquirrelAgreements.id();
var weresquirrelAgreement8id = WeresquirrelAgreements.id();

var duel1id = Duels.id();
var duel2id = Duels.id();
var duel3id = Duels.id();
var duel4id = Duels.id();
var duel5id = Duels.id();
var duel6id = Duels.id();

// Promise.all([
//   Colonies.remove({}),
//   Unibears.remove({}),
//   Weresquirrels.remove({}),
//   Duels.remove({}),
//   UnibearAgreements.remove({}),
//   WeresquirrelAgreements.remove({}),
//   WeresquirrelStats.remove({})
// ]).then(function () {
//     return Promise.all([
//       Duels.insert({_id: duel1id, first_colony: colony1id, second_colony: colony2id, won: colony2id, lost: colony1id }),
//       Duels.insert({_id: duel2id, first_colony: colony3id, second_colony: colony4id, won: colony3id, lost: colony4id }),
//       Duels.insert({_id: duel3id, first_colony: colony1id, second_colony: colony3id, won: colony3id, lost: colony1id }),
//       Duels.insert({_id: duel4id, first_colony: colony4id, second_colony: colony2id, won: colony4id, lost: colony2id }),
//       Duels.insert({_id: duel5id, first_colony: colony4id, second_colony: colony1id, won: colony1id, lost: colony4id }),
//       Duels.insert({_id: duel6id, first_colony: colony2id, second_colony: colony3id, won: colony3id, lost: colony2id }),
//     ])
// }).then(function () {
//   db.close()
// });



Promise.all([
  Colonies.remove().then(function () {
    return Promise.all([
      Colonies.insert({_id: colony1id}),
      Colonies.insert({_id: colony2id}),
      Colonies.insert({_id: colony3id}),
      Colonies.insert({_id: colony4id}),
    ]);
  }),
  Unibears.remove().then(function () {
    return Promise.all([
      Unibears.insert({_id: unibear1id, name: 'Arthur'}),
      Unibears.insert({_id: unibear2id, name: 'Genevieve'}),
      Unibears.insert({_id: unibear3id, name: 'Morgana'}),
      Unibears.insert({_id: unibear4id, name: 'Lancelot'}),
      Unibears.insert({_id: unibear5id, name: 'Galahad'}),
      Unibears.insert({_id: unibear6id, name: 'Fendrel'}),
      Unibears.insert({_id: unibear7id, name: 'Bron'}),
      Unibears.insert({_id: unibear8id, name: 'Cornwallis'}),
    ])
  }),
  Weresquirrels.remove().then(function () {
    return Promise.all([
      Weresquirrels.insert({_id: weresquirrel1id, name: 'Odin'}),
      Weresquirrels.insert({_id: weresquirrel2id, name: 'Loki'}),
      Weresquirrels.insert({_id: weresquirrel3id, name: 'Freya'}),
      Weresquirrels.insert({_id: weresquirrel4id, name: 'Valhalla'}),
      Weresquirrels.insert({_id: weresquirrel5id, name: 'Thor'}),
      Weresquirrels.insert({_id: weresquirrel6id, name: 'Iduna'}),
      Weresquirrels.insert({_id: weresquirrel7id, name: 'Gunnar'}),
      Weresquirrels.insert({_id: weresquirrel8id, name: 'Egil'}),
    ])
  }),
  UnibearAgreements.remove().then(function () {
    return Promise.all([
      UnibearAgreements.insert({_id: unibearAgreement1id, colonyId: colony1id, unibearId: unibear1id, length: 3, honey: 6 }),
      UnibearAgreements.insert({_id: unibearAgreement2id, colonyId: colony1id, unibearId: unibear2id, length: 5, honey: 2 }),
      UnibearAgreements.insert({_id: unibearAgreement3id, colonyId: colony2id, unibearId: unibear3id, length: 7, honey: 24 }),
      UnibearAgreements.insert({_id: unibearAgreement4id, colonyId: colony2id, unibearId: unibear4id, length: 1, honey: 8 }),
      UnibearAgreements.insert({_id: unibearAgreement5id, colonyId: colony3id, unibearId: unibear5id, length: 2, honey: 4 }),
      UnibearAgreements.insert({_id: unibearAgreement6id, colonyId: colony3id, unibearId: unibear6id, length: 8, honey: 9 }),
      UnibearAgreements.insert({_id: unibearAgreement7id, colonyId: colony4id, unibearId: unibear7id, length: 2, honey: 2 }),
      UnibearAgreements.insert({_id: unibearAgreement8id, colonyId: colony4id, unibearId: unibear8id, length: 9, honey: 86 }),
    ])
  }),
  WeresquirrelAgreements.remove().then(function () {
    return Promise.all([
      WeresquirrelAgreements.insert({_id: weresquirrel1id, colonyId: colony1id, weresquirrelId: weresquirrel1id, length: 3, peanuts: 23 }),
      WeresquirrelAgreements.insert({_id: weresquirrel2id, colonyId: colony1id, weresquirrelId: weresquirrel2id, length: 5, peanuts: 89 }),
      WeresquirrelAgreements.insert({_id: weresquirrel3id, colonyId: colony2id, weresquirrelId: weresquirrel3id, length: 7, peanuts: 21 }),
      WeresquirrelAgreements.insert({_id: weresquirrel4id, colonyId: colony2id, weresquirrelId: weresquirrel4id, length: 1, peanuts: 44 }),
      WeresquirrelAgreements.insert({_id: weresquirrel5id, colonyId: colony3id, weresquirrelId: weresquirrel5id, length: 2, peanuts: 71 }),
      WeresquirrelAgreements.insert({_id: weresquirrel6id, colonyId: colony3id, weresquirrelId: weresquirrel6id, length: 8, peanuts: 67 }),
      WeresquirrelAgreements.insert({_id: weresquirrel7id, colonyId: colony4id, weresquirrelId: weresquirrel7id, length: 2, peanuts: 47 }),
      WeresquirrelAgreements.insert({_id: weresquirrel8id, colonyId: colony4id, weresquirrelId: weresquirrel8id, length: 9, peanuts: 45 }),
    ])
  }),
  WeresquirrelStats.remove().then(function () {
    return Promise.all([
      WeresquirrelStats.insert({weresquirrelId: weresquirrel1id, duelId: duel1id, garlic: 8, meat: 8 }),
      WeresquirrelStats.insert({weresquirrelId: weresquirrel2id, duelId: duel1id, garlic: 2, meat: 4 }),
      WeresquirrelStats.insert({weresquirrelId: weresquirrel3id, duelId: duel2id, garlic: 1, meat: 4 }),
      WeresquirrelStats.insert({weresquirrelId: weresquirrel4id, duelId: duel2id, garlic: 5, meat: 5 }),
      WeresquirrelStats.insert({weresquirrelId: weresquirrel5id, duelId: duel3id, garlic: 2, meat: 8 }),
      WeresquirrelStats.insert({weresquirrelId: weresquirrel6id, duelId: duel3id, garlic: 4, meat: 7 }),
      WeresquirrelStats.insert({weresquirrelId: weresquirrel7id, duelId: duel5id, garlic: 1, meat: 9 }),
      WeresquirrelStats.insert({weresquirrelId: weresquirrel8id, duelId: duel5id, garlic: 4, meat: 6 }),
    ])
  }),
  Duels.remove().then(function () {
    return Promise.all([
      Duels.insert({_id: duel1id, first_colony: colony1id, second_colony: colony2id, won: colony2id, lost: colony1id }),
      Duels.insert({_id: duel2id, first_colony: colony3id, second_colony: colony4id, won: colony3id, lost: colony4id }),
      Duels.insert({_id: duel3id, first_colony: colony1id, second_colony: colony3id, won: colony3id, lost: colony1id }),
      Duels.insert({_id: duel4id, first_colony: colony4id, second_colony: colony2id, won: colony4id, lost: colony2id }),
      Duels.insert({_id: duel5id, first_colony: colony4id, second_colony: colony1id, won: colony1id, lost: colony4id }),
      Duels.insert({_id: duel6id, first_colony: colony2id, second_colony: colony3id, won: colony3id, lost: colony2id })
    ])
  })
]).then(function () {
  db.close();
});




