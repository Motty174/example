const {Router}=require('express')
const controller=require('../controller/index_controller')

const route=Router()

route
.get( '/' ,controller.main)
.get( '/login' ,controller.login_render)
.post( '/login' ,controller.login)
.get( '/register',controller.register_render)
.post( '/register', controller.register)
.get( '/admin' , (req,res)=> {
    res.render('admin',{title: "Admin"})
})

module.exports=route