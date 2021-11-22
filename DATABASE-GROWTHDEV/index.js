const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://userpro:Projecto4@gd.g0cij.mongodb.net/'; 
const client = new MongoClient(url);
const dbName = 'ciclo4';

async function main() {
    await client.connect(); 
    console.log('¡Conexión Exitosa!');
   
    const db=client.db(dbName);
    const collection =db.collection('users')

    const consultausuarios =await collection.findOne();
    console.log('Registros coleccion Usuarios:',consultausuarios);
    return 'done';

}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());