const mongoose = require('mongoose');
const{isEmail}=require('validator');

let Registeruser = new mongoose.Schema({
    username :{
        type : String,
        trim:true,
        required :[true,'Name is required']
    },
    email :{
        type : String,
        trim:true,
        lowercase:true,
        required : [true,'Email is required'],
        validate: [{ validator: value => isEmail(value), msg: 'Invalid email.' }],
        index:{
            unique : true, 
        },
        minlength:[6,"Email can't be shorter than 6 characters"],
        maxlength:[60,"Email can't be shorter than 60 characters"],
    },
    password :{
        type : String,
        trim:true,
        required:[true,'Password is required'],
        select:false
    },
    confirmpassword : {
        type : String,
        trim:true,
        required :[true,'Confirmpassword is required'],
    }
},{
    timestamps:true
}
)

module.exports = mongoose.model('Registeruser',Registeruser)