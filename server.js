//dependent variable
var express = require('express');
var hbs = require('hbs');
var path = require('path');
var bodyParser = require('body-parser');

//User model
var usersController = require('./controllers/users');
var app = express();

app.set('views', path.join(__dirname,'views'));
app.set('view engine','html');
app.engine('html',hbs.__express);
//app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded(
    {
        extended: false
        
    }));
app.use(express.static('public'));

//Routes
app.get('/', function(request,response){
   // console.log(users.getUsers()+'this is it');
    response.render('index',{
        title: "Home",
        users: users.getUsers()});

});

app.get('/users/:id',
       function(request,response){
           var user = users.getUser(request.params.id);
           response.render('profile',{title:" user Profile",
               user:user
           });
           
       });




app.get('/login',
       function(request,response){
           var user = users.getUsers(request.params.id);
           response.render('login',{title:"login",
               user:user
           });
           
       });

app.get('/signup',
       function(request,response){
           var user = users.getUsers(request.params.id);
           response.render('signup',{title:"signup",
               user:user
           });
           
       });


app.get('/about',
       function(request,response){
           var user = users.getUsers(request.params.id);
           response.render('about',{title:"about",
               user:user
           });
           
       });


app.post('/login',userController.postLogin);



app.listen(3000);

