const http=require("http")
const url=require("url")
const array=require("./student")

const PORT=5050




const server=http.createServer((req,res)=>{
     
    let path=url.parse(req.url)
    console.log("req.url",req.url)
    console.log("path",path)
    path=path.pathname
    console.log(path)



    if(path==="/students" && req.method==="GET"){
        res.writeHead(200,{"content-type":"application/json"})
        res.end(JSON.stringify({message:"All students fetched",data:array}))
    }else if(path.startsWith("/students/") && req.method==="GET"){

          let id = path.split("/")
          id=Number(id[id.length-1])

          
    

          const val=array.find((s)=>{
           
            if(s.id===id){
                return s
            }
          })

          
          

        res.writeHead(200,{"content-type":"application/json"})
        res.end(JSON.stringify({message:"student fetched",data:val}))
    }else if(path==="/students" && req.method==="POST"){

        let body=""
        req.on("data",(chunk)=>{
            body+=chunk.toString()

        })

        req.on("end",()=>{
        const newStudent=JSON.parse(body);
        newStudent.id=Date.now()
        array.push(newStudent)

        res.writeHead(201,{"content-type":"application/json"})
        res.end(JSON.stringify({message:"Student created",data:newStudent}))


        })
    }else{
        res.writeHead(404)
        res.end(JSON.stringify({message:"Route not found"}))

    }

})


server.listen(PORT,()=>{
    console.log(`server started at port ${PORT}`);
    
})