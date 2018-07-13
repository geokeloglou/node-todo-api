const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//todo
// var id = '5b47fbb70ac8093019526eb311';
//user
var id = '5b479869754fee5912c6c929';

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//      console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//      console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//      console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

User.findById(id).then((user) => {
    if (!user) {
        return console.log('User not found');
    }
     console.log(JSON.stringify(user, undefined, 4));
}).catch((e) => console.log(e));

