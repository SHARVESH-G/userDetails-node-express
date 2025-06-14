import express from 'express';
import bodyParser from 'body-parser';
import { Users } from './userData.js';

const app = express();
const port = 3000;
let data;
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));

app.get('/' , (req,res)=>{
    res.render('index.ejs' ,{user:data});
})

app.post('/user', (req, res)=> {
    let ranUserNo = Math.floor(Math.random() * Users.length);
    data =Users[ranUserNo];
    res.redirect('/');
})

app.get('/user-detail',(req,res)=>{
    let id=req.query.User;
    let userSpeciData = Users.find((user) => {
        return user.id == id;
    });
    res.render('user-detail.ejs', {us:userSpeciData});
})

app.get('/search' , (req,res)=>{
    res.render('search.ejs');
})

app.listen(port ,()=>{
    console.log("Server Started on port " + port);
})