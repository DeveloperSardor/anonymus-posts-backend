import { model, Schema } from "mongoose";


const CommentSchema = new Schema({
    comment : {
        type : String,
        required : [true, 'Comment is required']
    }
})



export default model('Comments', CommentSchema)