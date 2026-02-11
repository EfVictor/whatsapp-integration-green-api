require("dotenv").config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const routes = require("./routes/Routes.js");  // Здесь описаны все маршруты

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use("/api", routes);

app.listen(process.env.PORT, () => {
    console.log(`Сервер запущен на порту ${process.env.PORT}`);
}).on('error', (err) => {
  console.error("Ошибка при запуске сервера: ", err);
});