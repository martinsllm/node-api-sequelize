const ProductRepository = require('../repositories/ProductRepository');
const Product = require('../models/Product');

module.exports = {
    async List(req, res) {
        try {
            const data = await ProductRepository.List();
            return res.json(data);
        } catch (error) {
            return res.status(500).json({'MESSAGE': error});
        }
    },

    async ListOne(req, res) {
        try {
            const data = await ProductRepository.ListOne(req.params.id);

            return (data) ? 
                res.json(data) : 
                res.status(404).json({'MESSAGE': 'Resultado não encontrado!'});
        } catch (error) {
            return res.status(500).json({'MESSAGE': error});
        }
    },

    async Create(req, res) {
        try {
            await ProductRepository.Create({...req.body})
            return res.status(201).json();
        } catch (error) {
            return res.status(500).json({'MESSAGE': error});
        }
    },

    async Update(req, res) {
        try {
            const data = await ProductRepository.ListOne(req.params.id);
            if(!data ) res.status(404).json({'MESSAGE': 'Resultado não encontrado!'});

            await ProductRepository.Update(data, req.body)

            return res.status(204).json();
        } catch (error) {
            return res.status(500).json({'MESSAGE': error});
        }
    },

    async Delete(req, res) {
        try {
            const data = await ProductRepository.ListOne(req.params.id);
            if(!data ) res.status(404).json({'MESSAGE': 'Resultado não encontrado!'});

            await ProductRepository.Delete(data);

            return res.status(204).json();
        } catch (error) {
            return res.status(500).json({'MESSAGE': error});
        }
    }
}