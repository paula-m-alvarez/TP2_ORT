import express from 'express';

const PORT = 3000;

const app = express();

const inventors = [
    {first: 'Albert', last: "Einstein", year: 1879 },
    {first: 'Albert', last: "Einstein", year: 1879 },
    {first: 'Albert', last: "Einstein", year: 1879 },
];

// Endpoints / Router
app.get('/', (req, rest) => {
    rest.send(`
        <html>
            <head></head>
            <body>
                Home de la API de inventors
            </body>
        </html>
    `)
})

app.get('/api/inventors', (req, res) => {
    res.json(inventors);
});

app.post('/api/inventors', (req, res) => {
    res.json(inventors);
})


app.listen(PORT, () => {
    console.log("Servidor Web con Express");
});