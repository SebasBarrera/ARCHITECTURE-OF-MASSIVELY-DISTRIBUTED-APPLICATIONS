const express = require("express");
const app = express();
app.use(express.json());

let users = [];

app.post("/api/users", (req, res) => {
    const user = { id: Date.now(), ...req.body };
    users.push(user);
    res.status(201).json(user);
});

app.get("/api/users/:id", (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    user ? res.json(user) : res.status(404).json({ error: "Usuario no encontrado" });
});

app.listen(3000, () => console.log("User Service escuchando en puerto 3000"));
