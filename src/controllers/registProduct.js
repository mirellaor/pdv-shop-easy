const insertProductIntoDatabase = require("../utils/insertProductIntoDatabase");
const validateproductDataRegister = require("../utils/validateProductDataRegister");

const productRegistration = async (req, res) => {
    const { descricao, quantidade_estoque, valor, categoria_id } = req.body;

    try {
        await validateproductDataRegister (descricao, quantidade_estoque, valor, categoria_id)

        const product = await insertProductIntoDatabase (descricao, quantidade_estoque, valor, categoria_id)
        
        return res.status(200).json(product);
    } catch (error) {
        console.log(error)
        return res.status(error.code).json(error.message);
    }
}

module.exports = {
    productRegistration
}