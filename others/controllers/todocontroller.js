var bodyParser = require('body-parser');
var data=[{item:"milk"},{item:"coffee"}];
var urlencodedParser = bodyParser.urlencoded({ extended: false });
module.exports=function(app)
{
  app.get('/',function(req,res)
         {
           res.render('todo',{todos:data});
         });
  app.post('/',urlencodedParser,function(req,res)
         {
           console.log(req.body); 
          data.push(req.body);
           
         });
  app.delete('/',function(req,res)
         {
      
         });
};