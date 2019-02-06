//const MongoClient = require('mongodb').MongoClient;

// Get the property MongoClient and put it into variable MongoClient
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connoct to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  const db = client.db('TodoApp');

  // deleteMany
  // db.collection('Todos')
  //   .deleteMany({ text: 'Eat lunch' })
  //   .then((result) => {
  //     console.log(result);
  //   });

  // deleteOne
  // db.collection('Todos')
  //   .deleteOne({ text: 'Eat lunch' })
  //   .then((result) => {
  //     console.log(result);
  //   });

  // findOneAndDelete
  // db.collection('Todos')
  //   .findOneAndDelete({ completed: false })
  //   .then((result) => {
  //     console.log(result);
  //   });

  // deleteMany
  // db.collection('Users')
  //   .deleteMany({ name: 'Jürgen' })
  //   .then((result) => {
  //     console.log(result);
  //   });

  // findOneAndDelete
  db.collection('Users')
    .findOneAndDelete({
      _id: new ObjectID('5c5ac037fc56e7cc40d36797')
    })
    .then((result) => {
      console.log(result);
    });

  //client.close();
});
