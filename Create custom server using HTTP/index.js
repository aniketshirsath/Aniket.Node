const http = require("http");
const fs = require("fs");

const server=http.createServer((req , res)=>{
    if(req.url == "/home"){
        res.end('Welcome To Home Page')
        console.log(req.url)
    }
    else if(req.url == "/about"){
        res.end('Welcome To About Page')
    }
    else if(req.url == "/getproductdata"){
        fs.readFile("./db.json","utf-8",(err,data)=>{
            if (err) {
                
                console.log(err)

              } else {
                const jsonData = JSON.parse(data)
                res.end(JSON.stringify(jsonData.products))
              }
        })
    }
    else if(req.url == "/user"){
        fs.readFile("./db.json","utf-8",(err,data)=>{
            if (err) {
                
                console.log(err)

              } else {
                const jsonData = JSON.parse(data)
                res.end(JSON.stringify(jsonData.user))
              }
        })
    }
    else(
        res.end("404 Not Found")
    )
});


server.listen(1411, () => {
    console.log("Listening on port 1411");
  });

  // http://localhost:1411