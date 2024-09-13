import express from 'express';

const PORT = 3000;

const app = express();

const inventors = [
    {id: 1, first: 'Albert', last: "Einstein", year: 1879 },
    {id: 2, first: 'Albert', last: "Einstein", year: 1879 },
    {id: 3, first: 'Albert', last: "Einstein", year: 1879 },
];

app.use(express.json());

app.use("/", (req, res, next) => {
    if(req.query.token == "abc123"){
        next();
    } else {
        res.status(401).send("login fail");
    }
})

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
});

app.get('/api/inventors', (req, res) => {
    res.json(inventors);
});

app.post('/api/inventors', (req, res) => {
    const inventor = req.body;
    inventors.push(inventor);
    res.json(inventor);
});


app.get('/api/inventors/:id', (req, res) => {
    res.json(inventors.find((inventor) => inventor.id == req.params.id));
});

app.listen(PORT, () => {
    console.log("Servidor Web con Express");
});