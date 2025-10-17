const express = require('express');
const app = express();
const cors = require('cors'); 

const { PORT } = require("./config"); 

app.use(cors());

// Activamos el parseador de JSON para que la API entienda los `body`.
// Y le decimos que aguante hasta 50MB, para que no llore con las imágenes.
app.use(express.json({ limit: '50mb' }));

// Esto ejecuta el código de `config.db.js` y establece la conexión.
require('./config.db.js');


const profileRoutes = require('./routes/profiles.routes.js');
const auth_routes = require('./routes/AuthRoute.js');
const state_routes = require('./routes/StateRoute.js');
const category_routes = require('./routes/CategoryRoute.js');
const new_routes = require('./routes/NewRoute.js');
const user_routes = require('./routes/UserRoute.js');
//uso de rutas
app.use('/api/profiles', profileRoutes);
app.use('/api/auth', auth_routes);

// Todas las demás las metemos juntas bajo /api, porque asi lo ando haciendo
app.use('/api', state_routes);
app.use('/api', category_routes); // A la verga, lo separo para que no de pedos XD
app.use('/api', new_routes);
app.use('/api', user_routes);


//iniciando el servidor 
app.listen(PORT, () => {
    console.log(`¡A JALAR, PENDEJO! Servidor corriendo en el puerto ${PORT}`);
});

module.exports = app;