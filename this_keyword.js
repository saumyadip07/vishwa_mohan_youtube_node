

// global.name="saumya"

module.exports.name="dhiraj"

console.log(this) // normal this outside everything


function test(){
    console.log(this);
    
}
// test()

let testArrow=()=>{
    console.log(this);
    
}
testArrow()