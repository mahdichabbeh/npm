import express from 'express';
const app = express();

app.get("/", (req, res) => {
    res.send("Hello, Express!");
});

const hello= "world" ;
console.log( hello );

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
