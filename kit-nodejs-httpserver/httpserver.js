const http = require( 'http' );
http.createServer( ( req, res ) => {
    res.writeHead( 200, { 'Content-Type': 'text/plain' } );
    res.write('Hello\n' );
    setTimeout( ( ) => {
        res.end( 'World\n');
    }, 5000 );
    res.write('goodbye\n');
}).listen( 8000, ( ) => { 
    console.log( 'HTTP Server started' ) 
} );

