import express from 'express'

const app = express()

app.use(express.json()) 

const usuarios = []

//criar rotas

app.post('/cadastro', (req,res)=>{
    //console.log(req.body)
    usuarios.push(req.body)
    //res.send('Post funcionando')
    res.status(201).json(req.body)
})

app.get('/cadastro',(req,res)=>{
    //res.send('Get funcionando')
    res.json(usuarios)
    res.status(200).json(req.body)
})



//configurar porta do server
app.listen(3000,()=>{console.log('SERVIDOR RODANDO')})