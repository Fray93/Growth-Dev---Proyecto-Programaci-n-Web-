const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://userpro:Projecto4@gd.g0cij.mongodb.net/';
const client = new MongoClient(url);
const dbName = 'ciclo4';

async function main() {
    await client.connect();
    console.log('¡Conexión Exitosa!');

    const db = client.db(dbName); // use ciclo4
    const collection = db.collection('users') //db.user
    const collection1 = db.collection('projects') //db.projects

    //HU 01 Comando para registrarme en el sistema:

    /* const insertarUsuario = await collection.insertOne({
        nombre: "Sofia",
        email: "sofiacdlmxd@gmail.com",
        pwd: "sofia18",
        id: 985664,
        roll: "administrador",
        estado: "pendiente"
    }); */


    //HU 02 Comando para autenticarme en el sistema:

    /* const consultaUsuarios = await collection.findOne({ email: "alejocarlsen@gmail.com" });
    console.log('HU 02 - Usuario autenticado:', consultaUsuarios); */


    //HU 03 Comando para actualizar datos personales:

    /* const actualizarUsuario= await collection.updateOne({id:985664},{$set:{email:"udea@gmail.com"}}); */


    //HU 04 Comando para ver los usuarios registrados:

    /* const consultaUsuarios = await collection.find().toArray();
    console.log('HU 04 - Usuarios registrados:', consultaUsuarios); */


    //HU 05 Comando para cambiar el estado del usuario en el proyecto:

    /* const actualizarUsuario = await collection.updateOne({ id: 985664 }, { $set: { estado: "autorizado" } }); */


    //HU 06 Comando para ver los proyectos:

    /* const consultaProyectos = await collection1.find().toArray();
    console.log('HU 06 - Proyectos registrados:', consultaProyectos); */


    //HU 07 Comando para aprobar la creacion de un proyecto:
    /* const actualizarProyecto = await collection1.updateOne({ id: '' }, { $set: { estado1: "autorizado" } }); */


    //HU 08 Comando para cambiar el estado del proyecto:
    /* const actualizarProyecto = await collection1.updateOne({ id: ''  }, { $set: { estado2: "activo" }}); */


    //HU 09 Comando para cambiar la fase de un proyecto:
    /* const actualizarProyecto = await collection1.updateOne({ id: '' }, { $set: { fase: "desarrollo/terminado" } }); */


    return 'done';

}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());