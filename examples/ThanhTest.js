//const escpos = require('escpos');
const escpos = require('../');

// Select the adapter based on your printer type
//const device  = new escpos.USB();
// const device  = new escpos.Network('localhost');
const device  = new escpos.Serial('/dev/rfcomm0');

const printer = new escpos.Printer(device);

device.open(function(){

    printer
    .text("ご利用ありがとうございます3")
    .text("ご利用ありがとうございます3")
    .text("ご利用ありがとうございます3")
        //.cashdraw()
    .cut()
        .cut()
        //.cashdraw()
        //.flush()
    ;


    //printer.cashdraw();

    //printer.cashdraw(5);
    //printer.close();

});

setTimeout(function () {
    printer
        .text("ご利用ありがとうございます3")
        .text("ご利用ありがとうございます3")
        .text("ご利用ありがとうございます3")
        //.cashdraw()
       .cut()
    .close();


},10000);
