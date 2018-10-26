const sayHello = ( name )   => { return "Hello " + name; };
const sayCurrentDate = ( )  => { return "Todas is " + new Date( ); };
const sayGoodbay    = ( )   => { return "Goog bye!"; };

exports.sayHello    = sayHello;
exports.sayGoodbay  = sayGoodbay;
exports.sayCurrentDate = sayCurrentDate;