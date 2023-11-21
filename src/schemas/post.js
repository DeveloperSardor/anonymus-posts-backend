import { model, Schema } from "mongoose";


const PostSchema = new Schema({
    desc : {
        type : String,
        required : [true, 'Description is required field!']
    }
})



export default model('Posts', PostSchema)