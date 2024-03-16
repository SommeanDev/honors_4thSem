import express from 'express';
import bodyParser from 'body-parser';
import { createPost, getPosts } from './mongoclient.js';

const app = express();
app.use(bodyParser.json());

app.post('/posts', createPost);
app.get('/posts', getPosts);

const PORT = 3000;
app.listen(PORT);
console.log(`Application started on ${PORT}\n`);