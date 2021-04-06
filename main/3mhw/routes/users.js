const { loginController, registerController } = require("../controllers/userC");
module.exports = user = async (fastify, options) => {
  fastify.post('/login', loginController)
    .post('/register',  registerController)
};
