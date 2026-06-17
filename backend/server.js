const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/player/:id", (req, res) => {
  const id = req.params.id;

  const kd = +(Math.random() * 2 + 0.4).toFixed(2);
  const winrate = Math.floor(Math.random() * 70 + 30);
  const hours = Math.floor(Math.random() * 5000);

  res.json({
    id,
    name: "CS_" + id.slice(0, 6),
    avatar: "https://avatars.steamstatic.com/000000000.jpg",
    kd,
    winrate,
    hours,
    kills: Math.floor(Math.random() * 60000),
    deaths: Math.floor(Math.random() * 50000),
    maps: ["Mirage", "Inferno", "Dust2"]
  });
});

app.listen(3001, () => console.log("backend ok :3001"));