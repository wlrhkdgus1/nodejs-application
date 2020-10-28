var express = require("express");
var app = express();
app.locals.pretty = true;
app.set('view engine', 'jade');
app.set('views','./views');
app.use(express.static('public'));
app.get('/template',function(req,res){
    res.render('temp',{time:Date(), _title:'Jade'});
});
app.get('/' ,function(req,res){
    res.send('Hello home page');
});
app.get('/dynamic',function(req,res){
    var lis = '';
    for(var i=0; i<5; i++){
        lis = lis + '<li>coding</li>';
    }
    var time = Date();
    var output = `<!DOCTYPE html>
    <html lang="UTF-8">
    <head>
        <style>
            h1{
                color:blue;
            }
        </style>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <h1>Hello Dynamic</h1>
        <ul>
        ${lis}
        </ul>
        ${time}
    </body>
    </html>`;
    res.send(output)
})
app.get('/route', function(req,res){
    res.send('Hello Router, <img src="/route.png">')
})
app.get('/login',function(req,res){
    res.send('<h1>login plase</h1>');
});

app.listen(3000,function(){
    console.log('conneted 3000 port');
});