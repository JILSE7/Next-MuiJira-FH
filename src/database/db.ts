import mongoose from 'mongoose';

/**
 * 0 = disconnected
 * 1 = connected
 * 2 = connecting
 * 3 = disconnecting
 */
const mongoConnection = {
    isConnected: 0,   
}

export const connect = async() => {
  if(mongoConnection.isConnected){
    console.log("conectados");
    return;
  }

  if (mongoose.connections.length > 0) { //si ya hay alguna coneccion, entonces que la tome
      mongoConnection.isConnected = mongoose.connections[0].readyState;

      if(mongoConnection.isConnected === 1) {
        console.log("usando conexion anterior");
        return
      }

      // si el estado de la conexion no es igual a 1, voy a desconectarme
      await mongoose.disconnect();
  }

  await mongoose.connect('')
  mongoConnection.isConnected = 1;
  console.log("conectado a mongodb", "...");
}

export const disconnect = async() => {
    if(mongoConnection.isConnected != 0) return; // si ya estoy desconectado, para que necesito volver a desconectarme
    await mongoose.disconnect()
}