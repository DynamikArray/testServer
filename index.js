const path = require("path");

/* Basic fastify test intance */
const fastify = require("fastify")({ logger: true });

fastify.get("/ping", async (request, reply) => {
  return { hello: "world" };
});

fastify.register(require("fastify-static"), {
  //root: path.join(__dirname, "../client/dist"),
  root: "/hab/pkgs/bsr_test/testClient/0.1.0/20201016185408/dist/",
  wildcard: false,
});

const start = async () => {
  try {
    await fastify.listen(8000, "0.0.0.0");
  } catch (e) {
    fastify.log.error(e);
    process.exit();
  }
};

start();
