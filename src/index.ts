import express from 'express'
import fs from 'fs/promises'
const app = express()
app.use(express.json())

app.get('/',(req,res)=>{
    res.sendFile('index.html',{
        root:'./view'
    })
})



app.listen(3000,()=>{ // 80번 포트(기본포트)에서 서버 시작
    console.log("3000번 포트에서 서버 시작")
})
