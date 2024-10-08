
import express from "express"
const app = express()
const port = 3000
app.use(express.json()) 

const posts = []
const users=[]

app.post('/signup',(req,res)=>{
    const {username,password}=req.body;
    const newUser={id:users.length+1,username,password};
    users.push(newUser);
    res.json(newUser);
})

app.post('/login',(req,res)=>{
    const {username,password}=req.body;
    const user= users.find(u=> u.username==username && u.password==password)

    if(user)
    {
        res.send("succesful log in")
    }
    else{
        res.send("faild log in")
    }

})

app.get('/posts', (req, res) => {
    res.json(posts);
});
app.post('/posts', (req, res) => {
    console.log(req.body);

    const { username, post } = req.body;
    const newPost = { id: posts.length + 1, username, post };
    posts.push(newPost);
    res.json(newPost);

});

app.patch('/posts/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const { username, post } = req.body;
    const user = posts.find(u => u.id === userId);

    if (user) {
        user.username = username || user.username;
        user.post = post || user.post;
        res.json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

app.delete('/posts/:id',(req,res)=>{
    const userID=parseInt(req.params.id)
    const post=posts.findIndex(item=>item.id ===userID);
    if(post){
        posts.splice(post, 1);
        res.json({ message: "Data deleted successfully" });
    }

})
app.listen(port, () => {

    console.log(`Example app listening on port ${port}`)
})

