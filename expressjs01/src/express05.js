import express from 'express';
import myroutes from './routes/myroutes.js'

const app = express();
app.use(myroutes);
const port = 3000;
app.listen(port);
console.log('Server listening at port:', port);