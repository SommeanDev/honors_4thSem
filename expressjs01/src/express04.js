import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/', (req, res, next) => {
    res.send(`<h1>Hello ${req.body.name}</h1>`);
});

app.get('/', (req, res, next) => {
    console.log('Recieved request');
    console.log(req.method, req.url);
    res.send(`
        <html>
        <head><title>My Server</title></head>
        <body>
            <form method="POST">
                <label for="name">Name:</label>
                <input type="text" name="name">
                <button type="submit">Submit</button>
            </form>
        </body>
        </html>
    `);
});

const port = 3000;
app.listen(port);
console.log(`Server is listening on port ${port}`);