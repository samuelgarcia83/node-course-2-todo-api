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

  // db.collection('Todos').find({
  //   _id: new ObjectID('59ad953a090a2e351c8619c7')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('Users').find({name: 'Samuel Garcia'}).count().then((count) => {
    console.log(`Users count named Samuel Garcia: ${count}`);
  }, (err) => {
    console.log('Unable to count Users', err);
  });
  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to count todos', err);
  // });

  //db.close();
});
