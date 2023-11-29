const path = require('path')

const express = require("express");
const bodyParser = require("body-parser");
const rootDir = require('./util/path')

const app = express();

const adminRoutes = require("./Routes/admin");
const shopRoutes = require("./Routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public',)))

app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, 'Views', '404.html'));
});

app.listen(3000);
