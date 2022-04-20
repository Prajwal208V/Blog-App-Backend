const express = require('express');
const cors = require('cors');
const indexRoute = require('./router/index');
const mainRouter = express.Router();

const app = express();

const PORT = process.env.PORT || 8000;

app.use(cors());

mainRouter.route('/api/v1', indexRoute);


app.listen(PORT, () => {
    console.log(`listening on port:${PORT}...`);
})