const joi = require( 'joi' );

const users = [
    { 
        id      : '1',
        name    : 'user1',
        username: 'username1',
        password: 'password1',
        email   : 'user1@email.com'
    },
    { 
        id      : '2',
        name    : 'user2',
        username: 'username2',
        password: 'password2',
        email   : 'user2@email.com'
    },
    {
        id      : '3',
        name    : 'user3',
        username: 'username3',
        password: 'password3',
        email   : 'email3@email.com'      
    }              
];

function readAll( ) {
    return users;
}

function read( id ) {
    console.log( `Buscando por id:${id}:` );
    return users.find( user => { return user.id ==  id } );
    
}

function create( user ) {
    const newUser = {
        id      : users.length + 1,
        name    : user.name,
        username: user.username,
        password: user.password,
        email   : user.email
    };
    users.push( newUser );
    return newUser;
}

function update( id, newUser ) {
    const oldUser = read( id )
    oldUser.name = newUser.name;
    oldUser.username = newUser.username;
    oldUser.email = newUser.email;
    oldUser.password = newUser.password;
    return oldUser;
}

function remove( id ) {
    const user = read( id );
    const indexOf = users.indexOf( user );
    users.splice( indexOf, 1 );
    return user;
}

function validate( user ) {
    const schema = {
        name    : joi.string().min(3).required(),
        username: joi.string().min(3).required(),
        password: joi.string().min(8).required(),
        email   : joi.string().email().required()
    };
    return joi.validate(user, schema); 
}

exports.read = read;
exports.readAll = readAll;
exports.create = create;
exports.update = update;
exports.remove = remove;
exports.validate = validate;