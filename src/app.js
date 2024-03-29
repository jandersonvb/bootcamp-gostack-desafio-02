import express from 'express';

import routes from './routes';

import './database';

class App {
  constructor() {
    this.server = express();

    this.middlwares();
    this.routes();
  }

  middlwares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
