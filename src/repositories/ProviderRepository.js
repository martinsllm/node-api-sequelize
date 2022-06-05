const Provider = require('../models/Provider');

exports.List = async () => {
    return await Provider.findAll();
},

exports.ListOne = async (id) => {
    return await Provider.findByPk(id)
},

exports.Create = async (data) => {
    await Provider.findOrCreate({
        where: {
            ...data
        }
    });
},

exports.Update = async (data, newData) => {
    await data.update({...newData});
},

exports.Delete = async (data) => {
    await data.destroy();
}