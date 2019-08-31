console.log("HELLOW WORLD")


var miArray = [ "david", "jessica", "roberto", "maru" ];
for (var i = 0; i < miArray.length; i+=1) {
  console.log("En el índice '" + i + "' hay este valor: " + miArray[i]);
}


var miArray = [ 2, 4, 6, 8, 10 ];
for (var indice in miArray) {
  console.log("En el índice '" + indice + "' hay este valor: " + miArray[indice]);
}
    
var miObjeto = { "marca":"audi", "edad":2 };
for (var propiedad in miObjeto) {
  if (miObjeto.hasOwnProperty(propiedad)) {
    console.log("En la propiedad '" + propiedad + "' hay este valor: " + miObjeto[propiedad]);
  }
}


const moment =  require ('moment')

console.log (`Helow Word  ${moment()}`)




var colors = require('colors');
 
console.log('hello'.green); // outputs green text
console.log('i like cake and pies'.underline.red) // outputs red underlined text
console.log('inverse the color'.inverse); // inverses the color
console.log('OMG Rainbows!'.rainbow); // rainbow
console.log('Run the trap'.trap); // Drops the bass


var colors = require('colors');
 
colors.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'red'
});
 
// outputs red text
console.log("this is an error".error);
 
// outputs yellow text
console.log("this is a warning".warn);

// outputs silly text 
console.log("this is a rainbow text".silly);



var colors = require('colors');
 
colors.setTheme({
  custom: ['debug', 'underline']
});
 
console.log('test'.custom);