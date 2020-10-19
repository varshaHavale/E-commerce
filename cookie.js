var express =require('express');

var cookieParser=require('cookie-parser');

var bodyParser = require('body-parser');  

var urlencodedParser = bodyParser.urlencoded({ extended: false })  

var app=express();
app.use(express.static('public'));
app.use(cookieParser());

app.get('/login',function(req,res){
 res.sendFile( __dirname + "/" + "login1.html" );

console.log("my cookie:",req.cookies);

});

app.get('/home',function(req,res){
   res.status(200).send(req.cookies);
  res.sendFile( __dirname + "/" + "login1.html" );
 
  res.end();
});



app.post('/process_post', urlencodedParser, function (req, res) {  

var firstname=req.body.first_name;
var lastname=req.body.last_name;

if(firstname=='object' && lastname=='knowit')
{
res.send('Successful login');
}
else
{
 res.cookie('name', 'wrong user');

res.send('Wrong Username and Password!'+'<a href='+'/login1'+'>Back to login</a>');
		response.end();
}
  
   response = {  
       first_name:req.body.first_name,  
       last_name:req.body.last_name  
   };  
   console.log(response);  
 
});

var server = app.listen(8000, function () {  
  var host = server.address().address;  
  var port = server.address().port;  
  console.log('Example app listening at http://%s:%s', host, port);  
});  