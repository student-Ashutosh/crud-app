const express=require('express')
const app=express()
const path=require('path')


app.use('/',(req,res)=>{
    res.send("home page")
})
app.use(express.static(path.join(__dirname,'./crud-app/build')))
app.get('*',function(req,res){
    res.sendFile(path.join(__dirname,'./crud-app/build/index.html'))
})




app.listen(3000,()=>{
    console.log(`listeing on port no 3000`)
});