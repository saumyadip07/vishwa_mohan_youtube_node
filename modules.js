const os =require("os")

// console.log(os.platform());
// console.log(os.totalmem());
// console.log(os.freemem());
// console.log((os.freemem()/os.totalmem())*100);

const fs=require("fs")
console.log("Before writing file")
fs.writeFile("note.txt","Hello Nodejs",(err)=>{
    if (err){
      throw err
    }

    console.log("Successfully writing file")


})

fs.readFile("note.txt","utf-8",(err,data)=>{
    if (err){
        throw err
    }
    console.log(data)
})

console.log("After async")


