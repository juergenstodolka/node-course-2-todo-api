//const MongoClient = require('mongodb').MongoClient;

// Get the property MongoClient and put it into variable MongoClient
const { MongoClient, ObjectID } = require('mongodb');

// Create a new object id
var obj = new ObjectID();
console.log(obj);

// var user = { name: 'Jürgen', age: 55 };
// var { name } = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connoct to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //const db = client.db('TodoApp');

  // db.collection('Todos').insertOne(
  //   {
  //     text: 'Something to do',
  //     completed: false
  //   },
  //   (err, result) => {
  //     if (err) {
  //       return console.log('Unable to insert todo', err);
  //     }
  //     console.log(JSON.stringify(result.ops, undefined, 2));
  //   }
  // );

  // db.collection('Users').insertOne(
  //   {
  //     name: 'Jürgen',
  //     age: 55,
  //     location: 'Forchheim'
  //   },
  //   (err, result) => {
  //     if (err) {
  //       return console.log('Unable to insert user', err);
  //     }
  //     //console.log(JSON.stringify(result.ops, undefined, 2));
  //     console.log(result.ops[0]._id.getTimestamp());
  //   }
  // );

  client.close();
});