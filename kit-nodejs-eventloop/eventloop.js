const fs = require('fs');

const setTimeOutlogger   = ( )  => { console.log( 'setTimeout logger'    );    }
const setImmediateLogger = ( )  => { console.log( 'setImmediate logger'  );    }

setTimeout( setTimeOutlogger, 1000 );

fs.readFile( 'test.txt', 'utf-8',( data ) => { console.log( 'Reading data 1' ); } );
fs.readFile( 'test.txt', 'utf-8',( data ) => { console.log( 'Reading data 2' ); } );

setImmediate( setImmediateLogger );
setImmediate( setImmediateLogger );
setImmediate( setImmediateLogger );