const express = require('express');
const app = express();
const cors = require('cors');
const { PORT } = require("./config");

// Middlewares
app.use(cors());
app.use(express.json({ limit: '50mb' }));

// Conexión a la DB
require('./config.db.js');

// ===============================================
//           CARGA DE RUTAS (CON LOS PUTOS NOMBRES BIEN)
// ===============================================
const profileRoutes = require('./routes/profiles.routes.js'); // <-- ¡¡CORREGIDO, PENDEJO!!
const auth_routes = require('./routes/AuthRoute.js');
const state_routes = require('./routes/StateRoute.js');
const category_routes = require('./routes/CategoryRoute.js');
const new_routes = require('./routes/NewRoute.js');
const user_routes = require('./routes/UserRoute.js');

// ===============================================
//              USO DE RUTAS
// ===============================================
app.use('/api/profiles', profileRoutes); // Ahora sí, esta línea funciona
app.use('/api/auth', auth_routes);
app.use('/api', state_routes);
app.use('/api', category_routes);
app.use('/api', new_routes);
app.use('/api', user_routes);

// ===============================================
//              INICIAR SERVIDOR
// ===============================================
app.listen(PORT, () => {
    console.log(`¡A JALAR, PENDEJO! Servidor corriendo en el puerto ${PORT}`);
});

module.exports = app;