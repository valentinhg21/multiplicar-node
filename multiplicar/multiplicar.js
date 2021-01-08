//Para usar FileSystem
const fs = require('fs')

//Estilizar la terminal
const colors = require('colors');







// al limite le pongo 10 porque ya viene por deafult en el yargs
let listarTabla = (base, limite = 10) => {
    console.log('===================='.red)
    console.log(`==== Tabla del ${base} ====`.green)
    console.log('===================='.red)
    for (let i = 1; i <= limite; i++){
        let respuestaLimite = base * i;
        console.log(`${base} * ${i} = ${respuestaLimite}\n`);
    }
};


let crearArchivo =  ( base, limite = 10 ) => {
    return new Promise( ( resolve, reject ) => {

        //Validar si la base es un número
        if( !Number(base)){
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++){
            let respuesta = base * i;
            data += (`${base} * ${i} = ${respuesta}\n`);
            
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}`, data, (err) => {
            if (err) 
                reject(err);
            else 
                resolve(`tabla-${base}.txt`)
        });
    });
}


module.exports = {
    crearArchivo,
    listarTabla,
}