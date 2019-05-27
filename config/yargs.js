const descripcion = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripción de la tarea por hacer',
    }
};
const completado = {
    completado: {
        alias: 'c',
        default: true,
        desc: 'Marca como completado o pendiente una tarea',
    }
};

const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Elimina una tarea de la lista', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv,
}