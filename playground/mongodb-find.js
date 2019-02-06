//const MongoClient = require('mongodb').MongoClient;

// Get the property MongoClient and put it into variable MongoClient
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connoct to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  const db = client.db('TodoApp');

  // Find all in collection 'Todos' with property completed == false
  // db.collection('Todos')
  //   // .find({ completed: false })
  //   .find({ _id: new ObjectID('5c5ab67c9f32f9cec075049b') })
  //   .toArray()
  //   .then(
  //     (docs) => {
  //       console.log('Todos');
  //       console.log(JSON.stringify(docs, undefined, 2));
  //     },
  //     (err) => {
  //       console.log('Unable to fetch todos', err);
  //     }
  //   );

  // // Count documents in 'Todos' collections
  // db.collection('Todos')
  //   // .find({ completed: false })
  //   .count()
  //   .then(
  //     (count) => {
  //       console.log(`Todos count: ${count}`);
  //     },
  //     (err) => {
  //       console.log('Unable to count todos', err);
  //     }
  //   );

  // Count documents in 'Users' collections
  db.collection('Users')
    .find({ name: 'Jürgen' })
    .count()
    .then(
      (count) => {
        console.log(`Name equal Jürgen count: ${count}`);
      },
      (err) => {
        console.log('Unable to count users', err);
      }
    );

  // Find all in collection 'Todos'
  // db.collection('Todos')
  //   .find()
  //   .toArray()
  //   .then(
  //     (docs) => {
  //       console.log('Todos');
  //       console.log(JSON.stringify(docs, undefined, 2));
  //     },
  //     (err) => {
  //       console.log('Unable to fetch todos', err);
  //     }
  //   );

  //client.close();
});
