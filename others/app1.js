var express=require('express');
const mongoose=require('mongoose');
var MyChar=require('./MarioChar');
var todocontroller=require('./controllers/todocontroller.js');
var app=express();

app.set('view engine','ejs');
app.use(express.static('./style'));
todocontroller(app);
app.listen(8888);
mongoose.connect('mongodb://localhost/testaroo');
mongoose.connection.once('open',function()
                        {
                           console.log('connection has been made,now make fireworks...');
                        }).on('error',function(error)
                             {
                               console.log('connection error',error);
                              });
                                           
