const {getCategoryC} = require('../controllers/categoriesC')
module.exports = getCategories = async (fastify) =>{
    fastify.get('/', getCategoryC)
}