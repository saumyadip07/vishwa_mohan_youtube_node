// buffer is the place to store binary data temporary
/** 
const buffer= Buffer.from("Hello")
console.log(buffer)
console.log(buffer.toString());
*/


const fs=require("fs")
const readstream=fs.createReadStream("bigfile.txt")

readstream.on("data",(chunk)=>{
    console.log(chunk.toString(),"bjb");
    // console.log("Read")
})


readstream.on("end",()=>{
    console.log("Reading complete")
})