/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/order */
// FE: http://notesapp-v1.dicodingacademy.com/
// BE: http://35.77.221.127:5000/

/* eslint-disable quotes */
const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const { initializeApp } = require('firebase/app');
const firebaseConfig = require('./firebaseConfig');

const init = async () => {
  const server = Hapi.server({
    port: 8000,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });
  server.route(routes);
  await server.start();

  // Initialize Firebase

  const app = initializeApp(firebaseConfig);

  console.log(`Server berjalan pada ${server.info.uri}`);
};
init();
