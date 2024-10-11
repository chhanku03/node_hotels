/* var fs=require('fs');
var os=require('os');

var user=os.userInfo();
console.log(user);

fs.appendFile( 'greeting.txt', 'Hi'  + user.username + '! \n', ()=>{
    console.log("file is created");
}  );

var _ = require('lodash');

var notes=require('./notes.js');
const age=notes.age;
console.log(notes.addnumber(age+5,7));

var data=['sujit','kumar','srivastava','sujit','kumar',2,3,2,3,5];
var filter=_.uniq(data);
console.log(filter);
*/
const express = require('express')
const app = express()
const db=require('./db');
const bodyParser=require('body-parser');
app.use(bodyParser.json()); //req body

const MenueRoutes=require('./routes/MenuRoutes');
const PersonRoutes=require('./routes/PersonRoutes');
const req = require('express/lib/request');

app.get('/', function (req, res) {
  res.send('Hello sujit how are you')
})
app.get('/interview', (req,res)=>{
    res.send('interview questions');
} )
/*
app.get('/idli',(req,res)=>{
    var customized_idli={
        "idli": "sujit idli",
        "price": 50,
        "rating": 4.5
        
    }
    res.json(customized_idli);
})
*/

app.use('/MenueRoutes',MenueRoutes);
app.use('/person',PersonRoutes);
app.listen(3000,()=>{
    console.log("server run on 3000 port");
})

