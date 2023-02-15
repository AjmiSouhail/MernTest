const express = require ("express");
const cors = require("cors")
require('./config/connect');
const Employe = require('./model/Employe'); 
const app = express(); 
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); 
app.use(cors())
const PORT=8002;

app.get('/employe', async (req,res)=> {
   try{
emp = await Employe.find();
res.send(emp)
}
catch (error) {
   res.send(error)
}
})
app.post('/ajouter',async(req,res)=>{
   try {
      data = req.body;
      console.log(data)
      e = new Employe(data);
      saved = await e.save();
      res.send(saved)
      console.log(saved)
   }
   catch(error){
      res.send(error)
   }
})
      app.post('/modifier/:id',async(req,res)=>{
         try {
            data = req.body;
            id = req.params.id;
            e = await Employe.findByIdAndUpdate({_id : id},data)
            saved = await e.save();
            res.send(saved);
         }
         catch(error){
            res.send(error)
         }
      })
      app.delete('/delete/:id',async (req,res)=> {
   
         try{ myid =req.params.id;
         emp = await  Employe.findOneAndDelete({_id : myid})
          res.send(emp)}
          catch(error) {
              res.send(error)
          }
      })
app.get('/getapi',async(req,res)=>{
      const mypost= await fetch ("https://hub.dummyapis.com/employee?noofRecords=100&idStarts=1")
      const resData=await mypost.json()
      for(let i=0;i<resData.length;i++){
      const commentData = new Employe({
      id : resData[i]['id'],
      imageUrl : resData[i]['imageUrl'],
      firstName: resData[i]['firstName'],
      lastName : resData[i]['lastName'],
      email : resData[i]['email'],
      contactNumber : resData[i]['contactNumber'],
      age : resData[i]['age'],
      dob  :resData[i]['dob'],
      salary : resData[i]['salary'],
      address : resData[i]['address']
      });
      commentData.save()
   }
   res.status(200).json({resData})
})
app.get('/employeModifier/:id', async (req,res)=>{
   try {
   myid = req.params.id;
   emp = await Employe.findOne({  _id : myid})
   res.send(emp) 
   }
   catch(error) {
   res.send(error)
}
})
app.listen(PORT,(req,res)=>{
console.log(`Server is running successfully on port http://localhost:${PORT}`)
})