const express = require('express');
const sequelize = require('./src/config/dbConfig');
const clientRoutes = require('./src/routes/clientRoutes')

const app = express();
app.use(express.json());


// Rutas
app.use('/api', clientRoutes);


// Conectar a la base de datos
sequelize.sync().then(() => {
    console.log("Conectado a la base de datos");
}).catch(err => {
    console.error("No se pudo conectar a la base de datos", err);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
