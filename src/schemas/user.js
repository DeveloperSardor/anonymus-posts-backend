import { model, Schema } from "mongoose";


const UserSchema = new Schema({
    username : {
        type : String,
        unique : true,
        required : [true, 'Username is required field!']
    }
})



export default model('Users', UserSchema)