// importamos las dependencias necesarias
var router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Reservaciones');
})

/* con el método use de nuestro router estamos indicando 
 * que en la ruta 'v1/usuarios' estarán anidadas las rutas 
 * que vamos a crear en nuestro archivo usuarios.js,
 * la función require está importando este archivo */

module.exports = router;