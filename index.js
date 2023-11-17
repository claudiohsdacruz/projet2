const express = require("express");
const mongoose = require('mongoose');
const app = express();

app.use(express.json());
app.use("/api/converter", require("./routes/api/converter"));

app.get("/", (req, res) => {
    res.send("Home sweet home");
});

//Conectar ao MongoDB
// mongoose.connect('mongodb+srv://claudiodacruz:d9qHJdzAW5NCLE9Z@cluster0.0e3u5sf.mongodb.net/?retryWrites=true&w=majority');

try {
  mongoose.connect('mongodb+srv://claudiodacruz:d9qHJdzAW5NCLE9Z@cluster0.0e3u5sf.mongodb.net/?retryWrites=true&w=majority');
  console.log("passei");
} catch (error) {
  handleError(error);
}
const db = mongoose.connection;


// Evento emitido quando há um erro na conexão
db.on('error', (err) => {
  console.error('Error de conexion:', err);
});

// Evento emitido quando a conexão é bem-sucedida
db.once('open', () => {
  console.log('Connexion MongoDB avec sucess');
  // Agora você pode realizar operações no banco de dados
});

// Evento emitido quando a conexão é encerrada
db.on('close', () => {
  console.log('La Connexion avec MongoDB est fini');
});

// Evento emitido quando há uma reconexão à base de dados
db.on('reconnected', () => {
  console.log('Reconnecter de MongoDB');
});

// Evento emitido quando há uma falha na conexão
db.on('disconnected', () => {
  console.log('Deconnecté de MongoDB');
});

const PORT = 3002; // or another port if you changed it
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
