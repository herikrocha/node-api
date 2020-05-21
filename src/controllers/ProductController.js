const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    async index(req, res) {
        const { page = 1 } = req.query; //Valor default 1
        const products = await Product.paginate({}, { page, limit: 10}); //busca todos { wheres }, {pagina atual e tamanho da pagina}

        return res.json(products);
    },

    async show(req, res) {
        const product = await Product.findById(req.params.id);
        
        return res.json(product);
    },

    async store(req, res) {
        const product = await Product.create(req.body);

        return res.json(product);
    },

    async update(req, res) {
        //new:true -> Retorna o produto atualizado na var product, se não usado, o retorno será o produto antes do update
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        }); 

        return res.json(product);
    },
    
    async destroy(req, res) {
        await Product.findByIdAndRemove(req.params.id);

        return res.send();
    }
    
};