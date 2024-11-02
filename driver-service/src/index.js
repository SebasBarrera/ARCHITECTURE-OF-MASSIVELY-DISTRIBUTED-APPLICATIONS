const express = require("express");
const app = express();
app.use(express.json());

let drivers = [];

app.post("/api/drivers", (req, res) => {
    const driver = { id: Date.now(), status: "active", ...req.body };
    drivers.push(driver);
    res.status(201).json(driver);
});

app.get("/api/drivers/:id", (req, res) => {
    const driver = drivers.find(d => d.id === parseInt(req.params.id));
    driver ? res.json(driver) : res.status(404).json({ error: "Conductor no encontrado" });
});

app.put("/api/drivers/:id/status", (req, res) => {
    const driver = drivers.find(d => d.id === parseInt(req.params.id));
    if (driver) {
        driver.status = req.body.status;
        res.json(driver);
    } else {
        res.status(404).json({ error: "Conductor no encontrado" });
    }
});

app.listen(3001, () => console.log("Driver Service escuchando en puerto 3001"));