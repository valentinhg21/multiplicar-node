const argv  = require('./config/yargs.js').argv;
const colors = require('colors');

// Destructuracion para no usar  multiplicar.crearArchivo
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js')

let comando = argv._[0];

switch (comando) {
  case 'listar':
      //listarTabla toma la base y el limite para la ejecución
      listarTabla(argv.base, argv.limite)
      
      
    break;
  case 'crear':
      //listarTabla toma la base y el limite para la ejecución
      crearArchivo(argv.base, argv.limite)
      .then( archivo => console.log(`Archivo creado: ${archivo}`.red))
      .catch( e  => console.log(e))
  break;

  default:
    console.log('Comando no reconocido')
}


