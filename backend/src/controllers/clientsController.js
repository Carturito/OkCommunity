const Client = require('../models/client.model');

// Crear cliente
exports.createClient = async (req, res) => {
    console.log('entro a create')
    try {
        const client = await Client.create(req.body);
        res.status(201).send(client);
    } catch (error) {
        res.status(400).send(error);
    }
};

// buscar todos los clientes
exports.getAllClients = async (req, res) => {
    try {
        const clients = await Client.findAll();
        res.status(200).send(clients);
    } catch (error) {
        res.status(500).send(error);
    }
};

// buscar cliente por id
exports.getClientById = async (req, res) => {
    try {
        const client = await Client.findByPk(req.params.id);
        if (!client) {
            return res.status(404).send({ message: 'Cliente no encontrado.' });
        }
        res.status(200).send(client);
    } catch (error) {
        res.status(500).send(error);
    }
};

// actulizar cliente
exports.updateClient = async (req, res) => {
    try {
        const updated = await Client.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated[0] === 0) {
            return res.status(404).send({ message: 'Cliente no encontrado.' });
        }
        res.status(200).send({ message: 'Cliente actualizado con éxito.' });
    } catch (error) {
        res.status(400).send(error);
    }
};

// eliminar cliente
exports.deleteClient = async (req, res) => {
    try {
        const deleted = await Client.destroy({
            where: { id: req.params.id }
        });
        if (deleted === 0) {
            return res.status(404).send({ message: 'Cliente no encontrado.' });
        }
        res.status(200).send({ message: 'Cliente eliminado con éxito.' });
    } catch (error) {
        res.status(500).send(error);
    }
};
