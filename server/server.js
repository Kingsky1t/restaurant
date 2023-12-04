const express = require('express')
const app = express();
const cors = require('cors')

app.use(cors())
const port = process.env.PORT || 3001;
const restaurantData = require("./restaurantData.json");

app.get("/", (req, res) => {
    res.json(restaurantData);
});

app.listen(port, () => {
    console.log(`app running on http://localhost:${port}`);
});
