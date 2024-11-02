const express = require("express");
const app = express();
app.use(express.json());

let payments = [];

app.post("/api/payments", (req, res) => {
    const payment = { id: Date.now(), status: "pending", ...req.body };
    payments.push(payment);
    res.status(201).json(payment);
});

app.get("/api/payments/:id", (req, res) => {
    const payment = payments.find(p => p.id === parseInt(req.params.id));
    payment ? res.json(payment) : res.status(404).json({ error: "Pago no encontrado" });
});

app.put("/api/payments/:id/status", (req, res) => {
    const payment = payments.find(p => p.id === parseInt(req.params.id));
    if (payment) {
        payment.status = req.body.status;
        res.json(payment);
    } else {
        res.status(404).json({ error: "Pago no encontrado" });
    }
});

app.listen(3003, () => console.log("Payment Service escuchando en puerto 3003"));