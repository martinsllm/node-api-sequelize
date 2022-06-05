const ProviderRepository = require('../repositories/ProviderRepository');

module.exports = {

    async List(req, res) {
        try {
            const data = await ProviderRepository.List();
            return res.json(data);
        } catch (error) {
            return res.status(500).json({'MESSAGE': error});
        }
    },

    async ListOne(req, res) {
        try {
            const data = await ProviderRepository.ListOne(req.params.id);

            return (data) ? 
                res.json(data) : 
                res.status(404).json({'MESSAGE': 'Resultado não encontrado!'});
        } catch (error) {
            return res.status(500).json({'MESSAGE': error});
        }
    },

    async Create(req, res) {
        try {
            await ProviderRepository.Create({...req.body});
            return res.status(201).json();
        } catch (error) {
            return res.status(500).json({'MESSAGE': error});
        }
    },

    async Update(req, res) {
        try {
            const data = await ProviderRepository.ListOne(req.params.id);
            if(!data ) res.status(404).json({'MESSAGE': 'Resultado não encontrado!'});

            await ProviderRepository.Update(data, req.body);

            return res.status(204).json();
        } catch (error) {
            return res.status(500).json({'MESSAGE': error});
        }
    },

    async Delete(req, res) {
        try {
            const data = await ProviderRepository.ListOne(req.params.id);
            if(!data ) res.status(404).json({'MESSAGE': 'Resultado não encontrado!'});

            await ProviderRepository.Delete(data);

            return res.status(204).json();
        } catch (error) {
            return res.status(500).json({'MESSAGE': error});
        }
    },


}