// Imports
require("dotenv").config();
const fastify = require("fastify")();
const PORT = process.env.PORT || 3001;
const client = require("./config");

// Routes
fastify
  .addContentTypeParser(
    "application/json",
    {
      parseAs: "string",
    },
    (req, body, done) => {
      try {
        const json = JSON.parse(body);
        done(null, json);
      } catch (err) {
        err.statusCode = 400;
        done(err, undefined);
      }
    }
  )
  .register(require("./routes/users"), {
    prefix: "/api/user",
  })
  .register(require("./routes/products"), {
    prefix: "/api/product",
  })
  .register(require("./routes/categories"), {
    prefix: "/api/category",
  })
  .register(require("./routes/favorites"), {
    prefix: "/api/favorites",
  });

// Listeners
client.connect(() => {
  fastify.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`server listening on ${PORT}`);
  });
});
