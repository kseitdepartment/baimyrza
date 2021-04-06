const auth = require('../middleware/auth')
const {getFavoritesC, addFavoritesC} = require('../controllers/favoritesC')


module.exports = favorites = async(fastify) => {
    fastify.get('/', {preHandler: auth}, getFavoritesC)
    .post('/', {preHandler: auth}, addFavoritesC)
}