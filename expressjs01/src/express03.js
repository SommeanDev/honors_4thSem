import express from 'express';

const app = express();

app.use((req, res, next) => {
    let body = '';
    
    req.on('end', () => {
       console.log(body);
       const name = body.split('=')[1];
       if (name) {
        req.body = { name };
       }
       next();
    });
    
    req.on('data', (chunk) => {
        body += chunk;
        console.log(chunk);
    });
});


app.use((req, res, next) => {
    console.log('Recieved request');
    console.log(req.method, req.url);
    if (req.body) {
        return res.send(`<h1>Hello ${req.body.name}</h1>`);
    }
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