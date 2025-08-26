import express from 'express'

import pkg from '@prisma/client';
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

const app = express()

app.use(express.json()) 

//criar rotas

app.put('/cadastro/:id', async(req,res)=>{

    //console.log(req.params.id)

    await prisma.user.update({
        where:{
            id: req.params.id
        },
        data:{
            email: req.body.email,
            name: req.body.name,
            idade: req.body.idade
        }
    })

    res.status(201).json({"Message":"Usuario atualizado"})
})

app.delete('/cadastro/:id', async(req,res)=>{

    //console.log(req.params.id)

    await prisma.user.delete({
        where:{
            id: req.params.id
        },
    })

    res.status(201).json({"Message":"Usuario deletado"})
})

app.post('/cadastro', async (req,res)=>{

    await prisma.user.create({
        data:{
            email: req.body.email,
            name: req.body.name,
            idade: req.body.idade
        }
    })

    res.status(201).json(req.body)
})

app.get('/cadastro', async (req,res)=>{

    const lista_User = await prisma.user.findMany()

    res.status(200).json(lista_User)
})



//configurar porta do server
app.listen(3000,()=>{console.log('SERVIDOR RODANDO')})