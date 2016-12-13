//installing dependencies
var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');

//setting up express function
var app = express();

//port route for local host and heroku
var PORT = process.env.PORT || 8000;

//setting up bady parser for json objects
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.text());
app.use(bodyParser.json());

//setting up express-handlebars for the front end
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//setting up get route for items displayed on main page
app.get('/', function(req, res){
	res.render('accountSettings');
});

//getting static files(css, js)
app.use('/static', express.static('client'));

//having the server listen to the port in order to communicate the front end with the back end
app.listen(PORT, function(){
  console.log("Listening on port", PORT);
});