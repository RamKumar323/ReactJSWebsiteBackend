var models = require('./server.js').models;
/*
var toSave = [
  {name: 'Nick', email: 'nick@nick.com'},
  {name: 'Nick1', email: 'nick1@nick.com'},
  {name: 'Nick2', email: 'nick2@nick.com'},
  {name: 'Nick3', email: 'nick3@nick.com'},
  {name: 'Nick4', email: 'nick4@nick.com'},
  {name: 'Nick5', email: 'nick5@nick.com'},
  {name: 'Nick6', email: 'nick6@nick.com'},
  {name: 'Nick7', email: 'nick7@nick.com'},
  {name: 'Nick8', email: 'nick8@nick.com'},
  {name: 'Nick9', email: 'nick9@nick.com'},
  {name: 'Nick10', email: 'nick10@nick.com'},
  {name: 'Nick11', email: 'nick11@nick.com'},
  {name: 'Nick12', email: 'nick12@nick.com'},
  {name: 'Nick13', email: 'nick13@nick.com'},
];

toSave.map(obj => {
  models.Profile.create(obj, (err, created) => {
    console.log('created', created);
  });
}); */

// var filter = {
//   where: {}, // kind of like MYSQL where clause
//   order: 'date ASC', // order by field direction
//   limit: 3,
  // include: {
  //   relation: 'Posts',
  //   scope: {
  //     limit: 5,
  //     order: 'date DESC',
  //     include: {
  //       relation: 'Image',
  //       limit: 1,
  //       where: {type: 'thumbnail'},
  //     },
  //   },
  // },
// };

models.Profile.findOne({where: {name: 'Nick'}}, (err, found) => {
  console.log('Found?', err, found);
});

