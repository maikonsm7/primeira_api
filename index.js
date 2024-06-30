const express = require('express')
const port = 3000

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/', (req, res)=>{
    res.json({message: 'Tudo certo'})
})

app.post('/products', (req, res)=>{
    const product = {
        name: req.body.name,
        price: req.body.price
    }
    // res.json({
    //     message: "Produto cadastrado!",
    //     product
    // })
    if(!product.name){
        res.status(422).json({message: "O campo name é obrigatório!"})
        return
    }
    res.status(201).json(product)
})

app.listen(port, ()=>{
    console.log(`Servidor online. http://localhost:${port}`)
})