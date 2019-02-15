var express = require('express');
var bodyParser = require('body-parser');
const { ObjectID } = require('mongodb');

var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todo');
var { User } = require('./models/user');

var app = express();

// Configure the middleware
app.use(bodyParser.json());

// POST /todos: Create a new todo in database
app.post('/todos', (req, res) => {
  console.log(req.body);
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then(
    (doc) => {
      res.send(doc);
    },
    (e) => {
      res.status(400).send(e);
    }
  );
});

// GET /todos
app.get('/todos', (req, res) => {
  Todo.find().then(
    (todos) => {
      res.send({ todos });
    },
    (e) => {
      res.send(400).send(e);
    }
  );
});

// GET /todos/123432
app.get('/todos/:id', (req, res) => {
  var id = req.params.id;
  if (!ObjectID.isValid(id)) {
    // Invalid ObjectID
    return res.status(404).send();
  }

  // findById
  Todo.findById(id)
    .then((todo) => {
      if (!todo) {
        console.log('Id not found');
        return res.status(404).send();
      }
      console.log('Todo by Id', todo);
      res.send({ todo });
    })
    .catch((e) => {
      console.log('ERROR');
      res.status(400).send();
    });
});

// Start the server listening on port 3000
app.listen(3000, () => {
  console.log('Started on port 3000');
});

module.exports = { app };
