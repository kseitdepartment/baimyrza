const {getProductC, addProductC, deleteProductC} = require('../controllers/productsC')
const auth = require('../middleware/auth')

module.exports = product = async (fastify) =>{
    fastify
        .get('/:id', getProductC) //api/p/1
        .post('/', {preHandler: auth}, addProductC)
        .delete('/:id', {preHandler: auth}, deleteProductC)
}