const express = require('express');
const clientController = require('../controllers/clientsController');
const router = express.Router();

// Ruta para crear un nuevo cliente
router.post('/clients', clientController.createClient);

// Ruta para obtener todos los clientes
router.get('/clients', clientController.getAllClients);

// Ruta para obtener un cliente específico por ID
router.get('/clients/:id', clientController.getClientById);

// Ruta para actualizar un cliente
router.put('/clients/:id', clientController.updateClient);

// Ruta para eliminar un cliente
router.delete('/clients/:id', clientController.deleteClient);

module.exports = router;
