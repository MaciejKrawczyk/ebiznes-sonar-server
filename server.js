import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());

const products = [
    {id: 1, name: "Red Mug", price: 9.99},
    {id: 2, name: "Blue Pen", price: 2.49},
    {id: 3, name: "Notebook", price: 4.99}
];

app.get("/api/products", (req, res) => res.json(products));

app.listen(PORT, () =>
    console.log(`API running on http://localhost:${PORT}`)
);
