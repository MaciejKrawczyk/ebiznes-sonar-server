import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

// ⭐ allow every origin during dev (adjust for prod)
app.use(cors());

// fake data – swap for a DB whenever you’re ready
const products = [
    {id: 1, name: "Red Mug", price: 9.99},
    {id: 2, name: "Blue Pen", price: 2.49},
    {id: 3, name: "Notebook", price: 4.99}
];

// simple REST endpoint
app.get("/api/products", (req, res) => res.json(products));

app.listen(PORT, () =>
    console.log(`API running on http://localhost:${PORT}`)
);
