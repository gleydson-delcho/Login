import 'reflect-metadata';
import express from 'express';

const app = express();
const port = process.env.SERVER_PORT || 4000;
app
  .listen(port , () => {
    console.log(`Server is runing on port: ${port}`);
  });