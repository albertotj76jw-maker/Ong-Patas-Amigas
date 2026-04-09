const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost/patasamigas');

const User = mongoose.model('User', {
  email:String,
  password:String
});

app.post('/login', async (req,res)=>{
  const user = await User.findOne({email:req.body.email});
  const token = jwt.sign({id:user._id}, 'segredo');
  res.json({token});
});

app.listen(3000, ()=> console.log('Servidor rodando'));

