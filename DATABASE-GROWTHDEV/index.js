const { MongoClient, ObjectId } = require('mongodb');

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
        rol: "administrador",
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


    //HU 05 Comando para cambiar el estado del usuario:

    /* const actualizarUsuario = await collection.updateOne({ id: 985664 }, { $set: { estado: "autorizado" } }); */


    //HU 06 Comando para ver los proyectos:

    /* const consultaProyectos = await collection1.find().toArray();
    console.log('HU 06 - Proyectos registrados:', consultaProyectos); */


    //HU 07 Comando para aprobar la creacion de un proyecto:

    /* const actualizarProyecto = await collection1.updateOne({{"_id": ObjectId("619b414d14f20f9bbc59515e")}, { $set: { estado1: "autorizado" } }); */


    //HU 08 Comando para cambiar el estado del proyecto:

    /* const actualizarProyecto = await collection1.updateOne({"_id": ObjectId("619b414d14f20f9bbc59515e")}, { $set: { estado2: "activo" }}); */


    //HU 09 Comando para cambiar la fase de un proyecto:

    /* const actualizarProyecto = await collection1.updateOne({"_id": ObjectId("619b414d14f20f9bbc59515e")}, { $set: { fase: "desarrollo/terminado" } }); */


    //HU 10  Comando para ver la lista de estudiantes registrados en la plataforma:

    /* const consultaUsuarios = await collection.find({ rol: "estudiante" }).toArray();
    console.log('HU 10 - Usuarios rol estudiante:', consultaUsuarios); */


    //HU 11 Comando para aceptar estudiante:

    /* const actualizarUsuario = await collection.updateOne({ id: 985664 }, { $set: { estado: "autorizado/pendiente" } }); */


    //HU 12 Comando para crear un nuevo proyecto:

    /* const insertarProyecto = await collection1.insertOne({
        nombre: "Prueba",
        obj_g: "Objetivo General Prueba",
        obj_s: "Objetivo Especificos Prueba",
        psto: 1000000,
        id: 6572,
        lider: "Juan",
        estado1: "pendiente",
        estado2: "inactivo",
        fase: "desarrollo",
        solicitudes: {

        }
    }); */


    //HU 13 Comando para listar proyectos a cargo:

    /* const consultaProyectos = await collection1.find({id:6572}).toArray();
    console.log('HU 13 - Proyectos registrados a cargo:', consultaProyectos);  */


    //HU 14 Comando para actualizar datos de proyectos a cargo:

    /* const actualizarProyecto = await collection1.updateOne({"_id": ObjectId("619b414d14f20f9bbc59515e")},
        {
            $set: {
                nombre: "Cambio Prueba",
                obj_g: "Objetivo General Cambio Prueba",
                obj_s: "Objetivo Especificos Cambio Prueba",
                psto: 1500000
            }
        }); */


    //HU 15 Comando para listar las solicitudes realizadas por los estudiantes:

    /* const consultaProyectos = await collection1.find().toArray();
    console.log('HU 15 - Solicitudes registradas:', consultaProyectos); */


    //HU 16 Comando para cambiar el estado a la solicitudes:

    

    return 'done';

}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());