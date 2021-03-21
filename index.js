const express = require('express') 
const fs = require('fs/promises')
const app = express()

app.get('/',(req,res)=>{
    console.log(req.socket.remoteAddress)
    res.sendFile('index.html',{
        root: './view'
    })
})

app.listen(3000, ()=>{
    console.log('3000포트에서 서버 시작')
})
