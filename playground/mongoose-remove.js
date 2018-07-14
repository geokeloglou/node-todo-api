const {
    ObjectID
} = require('mongodb');

const {
    mongoose
} = require('./../server/db/mongoose');
const {
    Todo
} = require('./../server/models/todo');
const {
    User
} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

Todo.findOneAndRemove({
    _id: '5b494ddd9b2e59e8030cae77'
}).then((todo) => {});

Todo.findByIdAndRemove('5b494ddd9b2e59e8030cae77').then((todo) => {
    console.log(todo);
});