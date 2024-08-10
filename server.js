require('dotenv').config('./env')
const https = require("http");
const app = require("./app");
const port = process.env.PORT
const server = https.createServer(app);

const { dbConnect } = require("./helper/dbConnection");

dbConnect().then((_) => {
  server.listen(port, (_) => console.log(`Server is Running on http://localhost:${port}`));
});
