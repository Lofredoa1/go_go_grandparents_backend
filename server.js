/**
 * Main server script.
 * @version 2021.11.15
 * @since 2021.11.15
 */
import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import logger from 'morgan';
import { createServer } from 'http';
import Debug from 'debug';

/*----- Initialize -----------------------------------------------------------*/
dotenv.config();
/**
* @const {String} __dirname Package directory.
*
* Infill for CommonJS module `__dirname`.
* {@link https://techsparx.com/nodejs/esnext/dirname-es-modules.html}
*/
const __dirname = path.dirname(new URL(import.meta.url).pathname),
  debug = Debug('ggg:server'),
  app = express();

/*----- Middleware -----------------------------------------------------------*/
import authConfig from './config/auth.js';
import './config/database.js';
app.use(logger('dev'));
app.use(express.json());
app.use(authConfig);

/*----- Routers --------------------------------------------------------------*/
import userRouter from './routes/users.js';
app.use(express.static(path.join(__dirname, 'build')));
app.use('/api/users', userRouter);
app.use('/api', (err, req, res, next) =>
  console.log(err) || res.status(500).send({ error: err.message })
);
/*
app.use((req, res) =>
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
);
*/

/*----- Server Helper Functions ----------------------------------------------*/
function normalizePort(val) {
  const port = parseInt(val, 10);
  if (isNaN(port)) return val;
  if (port >= 0) return port;
  return false;
}
function onError(error) {
  if (error.syscall !== 'listen') throw error;
  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}
function onListening() {
  const addr = server.address(),
    bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  debug('Listening on ' + bind);
}

/*----- Server Listen --------------------------------------------------------*/
const port = normalizePort(process.env.PORT || '3001');
app.set('port', port);
const server = createServer(app);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
