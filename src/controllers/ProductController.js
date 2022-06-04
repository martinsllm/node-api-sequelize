const Product = require('../models/Product');

module.exports = {
    async List(req, res) {
        try {
            const data = await Product.findAll();
            return res.json(data);
        } catch (error) {
            return res.status(500).json({'MESSAGE': error});
        }
    },

    async ListOne(req, res) {
        try {
            const data = await Product.findByPk(req.params.id);

            return (data) ? 
                res.json(data) : 
                res.status(404).json({'MESSAGE': 'Resultado não encontrado!'});
        } catch (error) {
            return res.status(500).json({'MESSAGE': error});
        }
    },

    async Create(req, res) {
        try {
            await Product.findOrCreate({
                where: {
                    ...req.body
                }
            });
            return res.status(201).json();
        } catch (error) {
            return res.status(500).json({'MESSAGE': error});
        }
    },

    async Update(req, res) {
        try {
            const data = await Product.findByPk(req.params.id);

            if(!data ) res.status(404).json({'MESSAGE': 'Resultado não encontrado!'});

            await data.update({...req.body});

            return res.status(204).json();
        } catch (error) {
            return res.status(500).json({'MESSAGE': error});
        }
    },

    async Delete(req, res) {
        try {
            const data = await Product.findByPk(req.params.id);

            if(!data ) res.status(404).json({'MESSAGE': 'Resultado não encontrado!'});

            await data.destroy();

            return res.status(204).json();
        } catch (error) {
            return res.status(500).json({'MESSAGE': error});
        }
    }
}