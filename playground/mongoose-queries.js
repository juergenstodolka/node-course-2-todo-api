const { ObjectID } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// Document Ids have a special format:
// If the format is correct but not found by query, mongo return 'null'.
// If the format is invalid, an error will be thrown.
//var id = '5c6570bdce14eee59863db20';  // valid
//var id = '6c6570bdce14eee59863db20';

// if (!ObjectID.isValid(id)) {
//   console.log('ID is not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });

// // Use this query to finf one document by any propoerty
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Use this query to find one document by id
// If nothing is found mongo return nothing (no error)
// Todo.findById(id)
//   .then((todo) => {
//     if (!todo) {
//       return console.log('Id not found');
//     }
//     console.log('Todo by Id', todo);
//   })
//   .catch((e) => console.log(e));

var user_id = '5c61bb002b793213b450a355';

// User.find({
//   _id: user_id
// }).then((users) => {
//   console.log('Users', users);
// });

// // Use this query to find one document by any propoerty
// User.findOne({
//   _id: user_id
// }).then((user) => {
//   console.log('User', user);
// });

// Use this query to find one document by id
// If nothing is found mongo return nothing (no error)
User.findById(user_id).then(
  (user) => {
    if (!user) {
      return console.log('Unable to find user');
    }
    console.log(JSON.stringify(user, undefined, 2));
  },
  (e) => {
    console.log(e);
  }
);
