//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

// var user = {name: 'Sam', age: 33};
// var {name} = user;
// console.log(user);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to Mongo server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if(err){
  //     return console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined,2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'Samuel Garcia',
  //   age: 33,
  //   location: 'Seekonk, MA'
  // }, (err, result) => {
  //   if(err){
  //     return console.log("Unable to insert the user");
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  //   //console.log(JSON.stringify(result.ops, undefined, 2));
  // });
  //
   db.close();
});
