let express = require('express');
let app = express();
let cors = require('cors');
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');


app.use(cors());
//app.use(morganLogger);
app.use(cookieParser());
app.use(bodyParser.urlencoded({
    'extended': 'true'
}));

app.use(bodyParser.json());
let root = '/api/';

app.use(root + 'ping', require(`./controllers/pingController`));
app.use(root + 'save', require(`./controllers/saveProductsController`));
app.use(root + 'getProducts', require(`./controllers/getProductsController`))

app.use(root, express.static('public'));
module.exports = app;