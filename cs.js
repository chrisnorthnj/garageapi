var gpio = require('rpi-gpio');
 
gpio.setup(15, gpio.DIR_IN, readInput);
 
function readInput() {
    gpio.read(15, function(err, value) {
        console.log('The value is ' + value);
    });
}

exit();
