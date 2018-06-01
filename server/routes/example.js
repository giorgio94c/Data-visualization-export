export default function (server) {

  server.route({
    path: '/api/simpledatavisualization/example',
    method: 'GET',
    handler(req, reply) {
      reply({ time: (new Date()).toISOString() });
    }
  });

}
