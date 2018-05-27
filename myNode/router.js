const express=require('express');
const router=express.Router()
let daoshi={
    name:'小伟',
    age:40,
    hobby:['敲代码','撩妹']
}

let fudaoyuan={
    name:'田老师',
    age:40,
    hobby:['教大家','撩妹啊啊']
}

let banzhuren={
    name:'陈老师',
    age:40,
    hobby:['教同学','撩汉子']
}
router.get('/daoshi',(req,res)=>{
    res.render('daoshi',daoshi)
})
router.get('/banzhuren',(req,res)=>{
    res.render('banzhuren',banzhuren)
})
router.get('/fudaoyuan',(req,res)=>{
    res.render('fudaoyuan',fudaoyuan)
})
router.post('/login',(req,res)=>{
    console.log(req.body)
})
module.exports=router