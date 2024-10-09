
import express from "express"
import mongoose from "mongoose"
import Article from "./models/Blog.js"
import dotenv from 'dotenv'
const app = express()
const port = 3000
app.use(express.json())

dotenv.config()


main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("data base connect")
}

app.post('/user',(req,res)=>{
    const article = new Article({
        title:req.body.title,
        body:req.body.body,
        auther:req.body.auther,
        emplyed:req.body.emplyed,
    })
    article.save()

    .then((result)=>{
        res.send(result);
    })
})

app.get('/articls',(req,res)=>{
    Article.find()
    .then(result=>{
        res.send(result)
    }).catch(()=>{
        res.send("error")
    })
})

app.patch('/articls/:id',(req,res)=>{
    const {id}=req.params
    Article.findByIdAndUpdate(id,req.body,{new:true,})
    .then(respone=>res.json())

})

app.get('/user',(req,res)=>{
    const article = new Article({
        title:req.body.title,
        body:req.body.body,
        auther:req.body.auther,
        emplyed:req.body.emplyed,
    })
    article.save()

    .then((result)=>{
        res.send(result);
    })
})


app.listen(port, () => {

    console.log(`Example app listening on port ${port}`)
})

