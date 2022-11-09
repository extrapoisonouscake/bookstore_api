const cors = require('cors')
const dotenv = require('dotenv');
dotenv.config()
const apiRoutes = require('./api/index.js')
const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 3001;
app.use(cors())
app.use(express.json());
app.use('/api',apiRoutes)
app.get('/',(req,res)=>res.send('sj'))
server.listen(PORT)