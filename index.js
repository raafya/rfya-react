// 1.importing the express
const express = require('express')
const employeemodel = require('./model')

// 2.initialize express
const app = new express()

// 3.middleware
app.use(express.urlencoded({extended:true}))
app.use(express.json())

// 3.API Creation
app.get('/',(req,res)=>{
    res.send("message from server")
})

app.get('/trial',(req,res)=>{
    res.send("message from trial API")
})

app.get('/data',(req,res)=>{
    res.json({"name":"raafya","age":19})
})
app.post('/add',async(req,res)=>{
    var result = await new employeemodel(req.body)
    result.save()
    res.send("data added")
})

app.post('/postdata',(req,res)=>{
    console.log(req.body)
    res.send("data added")
})
// 4.port
app.listen(8080,()=>{
    console.log("port 8080 is up and running")
})

// api to view data from db
app.get('/view',async(req,res)=>{
    let result = await employeemodel.find();
    res.json(result);
})

// deleting a data
app.delete('/remove/:id',async(req,res)=>{
    console.log(req.params);
    let id = req.params.id
    await employeemodel.findByIdAndDelete(id);
    res.json({message:'deleted'})
})

// to update
app.put('/edit/:id',async(req,res)=>{
    let id = req.params.id
    await employeemodel.findByIdAndUpdate(id,req.body);
    res.send("updated")
})