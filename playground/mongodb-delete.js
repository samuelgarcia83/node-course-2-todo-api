//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


// var user = {name: 'Sam', age: 33};
// var {name} = user;
// console.log(user);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to Mongo server');

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat Dinner'}).then((result) => {
  //   console.log(result);
  // });
  //deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat Dinner'}).then((result) => {
  //   console.log(result);
  // })
  //findOneAndDelete
  db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    console.log(result);
  })


  //db.close();
});
