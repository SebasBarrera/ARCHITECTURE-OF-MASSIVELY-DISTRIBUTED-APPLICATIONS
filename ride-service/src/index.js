const express = require("express");
const app = express();
app.use(express.json());

let rides = [];

app.post("/api/rides", (req, res) => {
    const ride = { id: Date.now(), status: "requested", ...req.body };
    rides.push(ride);
    res.status(201).json(ride);
});

app.get("/api/rides/:id", (req, res) => {
    const ride = rides.find(r => r.id === parseInt(req.params.id));
    ride ? res.json(ride) : res.status(404).json({ error: "Viaje no encontrado" });
});

app.put("/api/rides/:id/status", (req, res) => {
    const ride = rides.find(r => r.id === parseInt(req.params.id));
    if (ride) {
        ride.status = req.body.status;
        res.json(ride);
    } else {
        res.status(404).json({ error: "Viaje no encontrado" });
    }
});

app.listen(3002, () => console.log("Ride Service escuchando en puerto 3002"));