const http=require("http")


const PORT=3456

const server =http.createServer((req,res)=>{
    if(req.url ==="/" && req.method==="GET"){
        res.writeHead(200, {"content-type":"text/plain"})
        res.end("Welcome to the world of Nodejs")
    }

    if(req.url ==="/about" && req.method==="GET"){
        res.writeHead(200, {"content-type":"text/plain"})
        res.end("Welcome to the about us page")
    }

    if(req.url ==="/message" && req.method==="POST"){
       let body=""
       req.on("data",(chunk)=>{
        body+=chunk.toString()
       })


       req.on("end",()=>{
        const parsedData=JSON.parse(body)
        console.log("No more data to read")
    
        res.writeHead(201, {"content-type":"application/json"})
        res.end(JSON.stringify({message:"Your message got posted",data:parsedData}))
        console.log(parsedData.message)
       
       })
       
       
    }


})

server.listen(PORT,()=>{
    console.log("Server is started at port 3456");
    
})