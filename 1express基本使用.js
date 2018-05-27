const express=require('express')
const app=express()
const path=require('path')
// app.get('/index.html',(req,res)=>{
//     // res.writeHeader(200,{
//     //     "Content-Type":"text/html;charset=utf-8"
//     // })
//     // res.send('hello word哈哈哈')
//     res.sendFile(path.join(__dirname,'/view/index.html'))
    
// })
// app.get('/movie.html',(req,res)=>{
//     // res.send('这是电影')
//     res.sendFile(path.join(__dirname,'/view/movie.html'))

// })
// app.post('/postinfo',(req,res)=>{
//     res.send('post请求')
// })
// app.put('putinfo',(req,res)=>{
//     res.send('put请求')
// })
app.use(express.static('public'))
app.listen(4000,function(){
    console.log('express 启动成功')
})