var express=require("express");
var app=express();

app.use(express.static(__dirname + '/WebContent')); 

/* app.get('/',function(req,res){
	res.send('hello world');
}); */

var ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port      = process.env.OPENSHIFT_NODEJS_PORT || 8080;

app.listen(port,ipaddress);