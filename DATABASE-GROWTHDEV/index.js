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

    /* const actualizarProyecto = await collection1.updateOne({"_id": ObjectId("619b4dca33d93594e0f3b54a")}, { $set: { estado1: "autorizado" } }); */


    //HU 08 Comando para cambiar el estado del proyecto:

    /* const actualizarProyecto = await collection1.updateOne({"_id": ObjectId("619b4dca33d93594e0f3b54a")}, { $set: { estado2: "activo" }}); */


    //HU 09 Comando para cambiar la fase de un proyecto:

    /* const actualizarProyecto = await collection1.updateOne({"_id": ObjectId("619b4dca33d93594e0f3b54a")}, { $set: { fase: "desarrollo/terminado" } }); */


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
            s1: {
                id: 97123,
                es1: "pendiente"
            }
        },
        avances: {
            a1: {
                id: 97123,
                d1: "Primer Avance",
                Obs1: ""
            }
        },
    }); */


    //HU 13 Comando para listar proyectos a cargo:

    /* const consultaProyectos = await collection1.find({id:6572}).toArray();
    console.log('HU 13 - Proyectos registrados a cargo:', consultaProyectos);  */


    //HU 14 Comando para actualizar datos de proyectos a cargo:

    /* const actualizarProyecto = await collection1.updateOne({"_id": ObjectId("619b4dca33d93594e0f3b54a")},
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

    /* const actualizarProyecto = await collection1.updateOne({
        $and: [
            { "_id": ObjectId("619b4dca33d93594e0f3b54a") },
            { "solicitudes.s1.id": 97123 }
        ]
    },
        {
            $set: { "solicitudes.s1.es1": "aceptar" }
        });
 */

    //HU 17 Comando para listar la información relacionada al proyecto que deseo revisar:

    /* const consultaProyectos = await collection1.findOne({"_id": ObjectId("619b4dca33d93594e0f3b54a")});
    console.log('HU 17 - Proyecto que deseo revisar:', consultaProyectos); */


    //HU 18 Comando para agregar observaciones a un avance en uno de mis proyectos:

    /* const actualizarProyecto = await collection1.updateOne({
        $and: [
            { "_id": ObjectId("619b4dca33d93594e0f3b54a") },
            { "avances.a1.id": 97123 }
        ]
    },
        {
            $set: { "avances.a1.Obs1": "Ingreso observación" }
        }); */


    //HU 19 Comando para listar proyectos en plataforma:

    /* const consultaProyectos = await collection1.find().toArray();
    console.log('HU 19 - Proyectos registrados en la plataforma:', consultaProyectos);  */


    //HU 20 Comando para generar una solicitud de inscripción al proyecto:

    /* const actualizarProyecto = await collection1.updateOne({ "_id": ObjectId("619b4dca33d93594e0f3b54a") },
        {
            $set: {
                solicitudes: {
                    "s1": {
                        id: 97123,
                        es1: "pendiente"
                    }
                }
            }
        }); */

    //HU 21 Comando para listar los avances de un proyecto en el que estoy inscrito:

    /* const consultaProyectos = await collection1.findOne({"_id": ObjectId("619b4dca33d93594e0f3b54a")});
    console.log('HU 21 - Proyecto que deseo revisar:', consultaProyectos); */


    //HU 22 Comando para registrar avances a un proyecto en el que estoy inscrito :

    /* const actualizarProyecto = await collection1.updateOne({
        $and: [
            { "_id": ObjectId("619b4dca33d93594e0f3b54a") },
            { "avances.a1.id": 97123 },
            { estado2: "activo" }
        ]
    },
        {
            $set: { "avances.a2.d2": "Ingreso avance" }
        }); */

    //HU 23 Comando para actualizar la información de un avance:

    /* const actualizarProyecto = await collection1.updateOne({
        $and: [
            { "_id": ObjectId("619b4dca33d93594e0f3b54a") },
            { "avances.a1.id": 97123 },
            { estado2: "activo" }
        ]
    },
        {
            $set: { "avances.a1.d1": "Actualizar avance" }
        });


    return 'done'; */

}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());