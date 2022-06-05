const Product = require('../models/Product');

exports.List = async () => {
    return await Product.findAll();
},

exports.ListOne = async (id) => {
    return await Product.findByPk(id);
},

exports.Create = async (data) => {
    await Product.findOrCreate({
        where: {
            ...data
        }
    });
}

exports.Update = async (data, newData) => {
    await data.update({...newData});
}

exports.Delete = async (data) => {
    await data.destroy();
}