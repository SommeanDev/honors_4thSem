//express is a runtime environment for node js applications to build on

import express from 'express';

const app = express();

app.use((req, res, next) => {
    console.log('Recieved request');
    console.log(req.method, req.url);
    res.send(
        `
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
        `
    );
});

const port = 3000;
app.listen(port);
console.log(`Server is listening on port ${port}`);