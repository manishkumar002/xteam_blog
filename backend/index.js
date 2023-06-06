const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || '8000'
require('./db/config');
const userSchema=require('./db/user')
const Category = require('./db/category');
const Blog = require('./db/blog');

app.use(express.json())
app.use(cors())


//signup
app.post('/signup',async(req,res)=>{
    let user = new userSchema(req.body)
    let result = await user.save()
    result = await result.toObject()
    res.send(result)
})

//login
app.post('/login',async(req,res)=>{
    try {
        const email = req.body.email;
        const password = req.body.password;
        const usermail = await userSchema.findOne({
          email: email,
          password: password,
        });
        if (usermail) {
          res.status(200).json({
            code: 200,
            message: "user Login successfully",
            data: {
             _id: usermail._id,
             // name: usermail.name,
             email: usermail.email,
             // contact: usermail.contact,
            },
            error: false,
            status: true,
          });
          console.log(usermail._id);
        } else {
          res.status(404).json({
            code: 404,
            message: "Invalid User details, Try Again.  ",
            data: [],
            error: false,
            status: false,
          });
        }
      } catch (err) {
        console.log(err);
      }
})


//Category
app.post('/add_category',async(req,res)=>{
  let category = new Category(req.body)
  let result = await category.save()
  result = await result.toObject()
  res.send(result)
})

app.get('/show_category',async(req,res)=>{
  let result= await Category.find();
  res.send(result);
})

app.delete('/show_category/:id',async(req,res)=>{
  let result=await Category.deleteOne({_id:req.params.id})
  res.send(result)
})

app.put('/show_category/:id',async(req,res)=>{
  let result=await Category.updateOne({_id:req.params.id},{$set:req.body})
  res.send(result)
})

//Blog
app.post('/add_blog',async(req,res)=>{
  let blog = new Blog(req.body)
  let result = await blog.save()
  result = await result.toObject()
  res.send(result)
})

app.get('/show_blog',async(req,res)=>{
  let result= await Blog.find();
  res.send(result);
})

app.delete('/show_blog/:id',async(req,res)=>{
  let result=await Blog.deleteOne({_id:req.params.id})
  res.send(result)
})

app.put('/show_blog/:id',async(req,res)=>{
  let result=await Blog.updateOne({_id:req.params.id},{$set:req.body})
  res.send(result)
})


//OTP
app.post('/updatepass',async(req,res)=>{
  const {email,oldpass,newpass,cpass}=req.body;
  if(newpass==cpass){const usermail = await userSchema.findOne({
    email: email,
    password: oldpass,
  });
 if(usermail){
    
      await userSchema.updateOne({  email: email  },
        {$set:{password:newpass}})
        res.send("password updated Successfully ..!")

 }else{
  res.send(" invalid details")
 }}else{
  res.send("your newpassword is not match with confirm password..")
 }
})




app.listen(PORT, (req,res)=>{
    console.log('server started...')
})