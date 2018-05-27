// 1. 引入 express
const express=require('express');
const path=require('path');
//引入ejs
const ejs=require('ejs');
// 2.创建
const app=express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'view'))
app.get('/',(req,res)=>{
    let obj={
        name:'zhangsn',
        age:40
    }
    // 读取模板  和数据 拼接出html
   res.render('abc',obj)
})


// 启动服务器 监听4000端口
app.listen(3000,()=>{
    console.log('exress 启动成功')
})