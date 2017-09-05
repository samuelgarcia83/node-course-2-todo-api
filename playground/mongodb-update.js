//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to Mongo server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('59adf9878006a32f219cffc4')
  // }, {
  //   $set:{
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false //this disable us from returning the old object that was updated
  // }).then((result) => {
  //   console.log(result);
  // })
//we can get other operators like $set by googling "mongodb update operators"
//look for information on mongodb website(git)

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('59ad9a2013208d201cedff93')
  }, {
    $set:{
      name: 'Stephanie Santos'
    },
    $inc:{
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  //db.close();
});
