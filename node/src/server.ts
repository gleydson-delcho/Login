import express from 'express';
import { routes } from './routes';
import './database'

const port = process.env.SERVER_PORT || 4000;
const app = express();

app
  .use(express.json())
  .use(routes)
  .listen( port, () => {
    console.log(`Server is runing on port: ${port}`);
  })