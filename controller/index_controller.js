const User=require('../models/User_model')
const bcrypt=require('bcrypt')

class IndexController{

    main(req,res){
        return res.render('main',{title: 'Main Page'})
    }
    
    login_render(req,res){
        return res.render('login',{title: 'Login'})
    }
    
    login(req,res){
            const user=req.body
            User.findOne({email: user.email}).exec()
            .then(data =>{
                if(!data){
                    return res.send(`User doesn't exists `)
                }
                const result=bcrypt.compareSync(user.password,data.password)
                if(!result){
                    return res.send('Wrong password')
                }
                if(result){
                    return res.redirect('/admin')
                }
                
            })

    }
    register_render(req,res){
        return res.render('register',{title: "Registration"})
    }
    
    register(req,res){
        const user=req.body
        User.findOne({email: user.email}).exec()
        .then(async data => {
            if(data){
                return res.send('User already exists')
            }
            user.password=bcrypt.hashSync(user.password,bcrypt.genSaltSync(10))
            await User.create(user)
            res.redirect( '/login' )
        })
    }
}

module.exports=new IndexController()