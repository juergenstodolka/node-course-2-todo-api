var mongoose = require('mongoose');

// User db model
// email - require it - trim it - set type - set min length of 1
// Create a model. Returns an object
var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
});

module.exports = { User };
