import express from "express";
import route from "./routes/routes";
import dotenv from 'dotenv';

dotenv.config();
const { APP_LOCALHOST : hostname, APP_PORT: port } = process.env;
const app = express();

app.use(express.static(__dirname + "/public"));
app.set('view engine', 'ejs'); 

app.use('/', route);

app.listen(port, () => {
  console.log(`Example app listening at http://${hostname}:${port}`);
});
