var http = require('http')
var url = require('url')

http.createServer(function(req, res)
{
    var route = req.url
    if(route==='/')
    {
        res.end("THis is information from backend to frontend")
    
    }
    if(route==='/getusernames')
    {
        var usernames = ['Sakshi', 'Khair']
        res.end(JSON.stringify(usernames))
    }
    console.log('My Node JS Server started successfully')
}
).listen(5000)