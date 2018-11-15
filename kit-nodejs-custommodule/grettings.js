const sayHello = ( name )   => { console.log(  "Hello " + name ); };
const sayCurrentDate = ( )  => { console.log( "Todas is " + new Date( ) ) };
const sayGoodbay    = ( )   => { console.log(  "Goog bye!" ) };

exports.sayHello    = sayHello;
exports.sayGoodbay  = sayGoodbay;
exports.sayCurrentDate = sayCurrentDate;