import mongoose, { Types } from "mongoose";
const { Schema } = mongoose;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    body: String,
    auther:String,
    emplyed:Boolean,
},
    { timestamps: true }
);

const Article = mongoose.model("Article", blogSchema)

export default Article;