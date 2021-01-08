const express=require('express')
const bodyParser=require('body-parser')
const expressLayout=require('express-ejs-layouts')
const {PORT,MongoURI}=require('./config/keys')
const mognoose=require('mongoose')

const app=express()

//Body-Parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

//ejs
app.set('view engine','ejs')
app.use(expressLayout)

//Routes
app.use( '/' , require('./routes/route'))

mognoose.connect(MongoURI,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true},err=>{
    if(err) throw err
    app.listen(PORT,()=>{
        console.log('Connected to mongo and server running')
    })
    
})
