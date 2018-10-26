const service = require('./service');
const joi  = require('joi');
const express = require( 'express' );
const app = express( );
const pid = process.pid;

app.use(express.json());

app.get('/',( req, res ) => {
 
    res.send('Welcome to rest user CRUD api');
});

//READ all users
app.get('/api/users', function( req, res ) {
    res.send( service.readAll() );
      
});

//READ a user by id
app.get( '/api/users/:id', ( req, res ) => {
    const user = service.read( parseInt( req.params.id ));
    if( !user ) {
        res.status( 404 ).send( `User with id ${req.params.id} was not found` );
    }
    res.send(user);
});

//CREATE a user
app.post( '/api/users', ( req,res ) => {
    const result = service.validate( req.body );
    if( result.error ) {
        res.status( 400 ).send( result.error.details[ 0 ].message );
    }
    res.send( service.create( req.body ) );
});

//UPDATE a user by id
app.put( '/api/users/:id', ( req, res ) => {
    const user = service.read( parseInt( req.params.id ) );
    if( !user ) { 
        res.status( 404 ).send( `User with id ${req.params.id} was not found`  );
    }
    const result = service.validate( req.body );
    if( result.error ) {
        res.status( 400 ).send( result.error.details[ 0 ].message );
    } 
    res.send( service.update( req.params.id, req.body ) );
    
});

//REMOVE a user by id
app.delete( '/api/users/:id', ( req, res ) => {
    const user = service.read( parseInt( req.params.id ) );
    if( !user ) { 
        res.status( 404 ).send( `User with id ${req.params.id} was not found`  );
    }
    res.send( service.remove( parseInt( req.params.id ) ) );
});

const port = process.env.PORT || 8000
app.listen( port, ( ) => { console.log( `Started process ${pid}` ); } ); 