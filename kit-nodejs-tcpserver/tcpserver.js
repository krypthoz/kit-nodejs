const net = require( 'net' );

const tcpserver = net.createServer( (socket) => {
        
        socket.write('Socket Hello\n');
        socket.end('World\n');
});

tcpserver.listen( 9000, () => { 
    console.log( 'TCP Server started.');   
});