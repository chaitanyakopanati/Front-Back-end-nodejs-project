const express = require('express');
const mongoose = require('mongoose');
const Registeruser = require('./model');
const jwt = require('jsonwebtoken');
const middleware = require('./middleware');
const cors = require('cors');
const object = require('@hapi/joi/lib/types/object');
const app = express();
//const{addUserValidation}=require('./validation/users/User.Validation')

const handleErrors=(err)=>{
console.log(err.message,err.code);
let errors={email:'',password:''}
//validation errors
if(err.message.includes('user validation failed')){
    Object.values(err.errors).forEach(({properties})=>{
        errors[properties.path]=properties.message;
    }); 
}
return errors;
}

// this is for live server DB connectING//mongoose.connect("mongodb+srv://chaitanya:Bujii*8709@cluster0.gotj9fo.mongodb.net/?retryWrites=true&w=majority",{
    mongoose.connect("mongodb://127.0.0.1:27017/mydb",{
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex : true
}).then(
    () => console.log('DB Connection established')
)

app.use(express.json());

app.use(cors({origin:"*"}))

// const errorFormatter=e=>{
//     //Registeruser validation failed: username: Name is required, email: Email is required, password: [Password 
// //is required, confirmpassword: Confirmpassword is required
//     let errors={}
//     const allErrors=e.substring(e.indexOf(':')+1).trim()
//     const allErrorsInArrayFormat=allErrors.split(',').map(err=>err.trim())
//     allErrorsInArrayFormat.forEach(error=>{
//         const[key,value]=error.split(':').map(err=>err.trim())
//         errors[key]=value
//     })
//     return errors
// }

app.post('/register',async (req, res) =>{
    try{
        const {username,email,password,confirmpassword} = req.body;
        let exist = await Registeruser.findOne({email})
        if(exist){
            return res.status(400).send('User Already Exist')
        }
        if(password !== confirmpassword){
            return res.status(400).send('Passwords are not matching');
        }
        let newUser = new Registeruser({
           
            username,
            email:req.body.email,
            password:req.body.password,
            confirmpassword:req.body.confirmpassword
            // username,
            // email:req.body.email,
            // password:req.body.password,
            // confirmpassword:req.body.confirmpassword
        })
        console.log("newUser",newUser)
         newUser.save(function (err) {

            if (err) {

                console.log(err); //TypeError: user.save is not a function

            }

            res.send("Registered Successfully!");

        });
        //res.status(200).send('Registered Successfully')
        // try {
        //     const savedUniverse  = await  newUser.save();
        //     res.json(savedUniverse)
        //     console.log('saved')
        //     res.status(200).send('Registered Successfully')
        // } catch (error) {
        //     res.json({ message: error})
        //     console.log('Not saved')
        // }
       

    }
    catch(err){
       const errors=handleErrors(err);
        return  res.status(400).json({errors})
        //errors:errorFormatter(err.message)
    } 
})

app.post('/login',async (req, res) => {
    try{
        const {password,email} = req.body;
       
        let exist = await Registeruser.findOne({email});
        console.log("email",email,exist)
        if(!exist) {
            return res.status(400).send('User Not Found');
        }
        if(exist.confirmpassword !== password) {
            return res.status(400).send('Invalid credentials');
        }else{
        let payload = {
            Registeruser:{
                id : exist.id
            }
        }
        console.log(payload,'payload')
        jwt.sign(payload,'jwtSecret',{expiresIn:3600000},
          (err,token) =>{
              if (err) throw err;
              return res.json({
                token,
                email
              })
          }  
            )
        }

    }
    catch(err){
        console.log(err);
        return res.status(500).send('Server Error')
    }
})

app.get('/myprofile',middleware,async(req, res)=>{
    try{
        const {email} = req.query;
        let exist = await Registeruser.findOne({email:email});
        
        // const {data} = req.quary;
        // console.log("_id",data)
        // let userid = data
        // console.log("userid",userid)
       
        // console.log(mongoose.Types.ObjectId(userMap),"run")
        // Registeruser.find({}, function(err, users) {
        //     var userMap = {};
        // console.log("userMap",userMap)
        //     users.forEach(function(user) {
        //       userMap[user._id] = user;
        //     });
        
        //     res.send(userMap);  
        //   });
        //let exist = await Registeruser.findOne(mongoose.Types.ObjectId(userMap));
        console.log("exist",exist)
        if(!exist){
            return res.status(400).send('User not found');
        }
        res.json(exist);
    }
    catch(err){
        console.log(err);
        return res.status(500).send('Server Error')
    }
})

app.listen(5000,()=>{
    console.log('Server running...')
})