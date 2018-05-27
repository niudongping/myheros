

const express=require('express')
const ejs=require('ejs')
const path=require('path')
const fs=require('fs')
const querystring=require('querystring')
const bodyParser=require('body-parser')

let app=express();
app.set('view engine','ejs')
app.set('views','./view')
app.use((req,res,next)=>{
    // let str=`日期 ${new Date().toLocaleString} 访问了 ${req.url} 方式为 ${req.method}\n`
    let str=`这年月 ${new Date().toLocaleString()}  访问了 ${req.url} 是什么${req.method} 方式\n `
    fs.appendFile(path.join(__dirname,'data.txt'),str,(err)=>{
        if(!err){
            console.log('数据写入成功')
            next();
        }
    })
    // let a='';
    // req.on('data',(chunk)=>{
    //     a +=chunk
    // })
    // req.on('end',()=>{
    //     let obj=querystring.parse(a)
    //     req.body=obj;
    // })
    // next();
    
})
app.use(bodyParser.urlencoded({extended:false}))
// app.get('/',(req,res)=>{

//     // res.send('hello word')
// })
app.use(express.static(path.join(__dirname,'public')));

let router=require('./router.js')
app.use(router);
app.listen(3000,()=>{
    console.log('可以成功访问')
})