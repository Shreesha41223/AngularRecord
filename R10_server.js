const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const PORT = 3000

const app = express()

app.use(bodyParser.json())
app.use(cors())

let data = [
    {name:'Johnny Depp', age:60, id:1}
]

app.get('/data',(req, res)=>{
    res.json(data);
})

app.put('/data',(req, res)=>{
    const newData = req.body;
    newData.id = data.length + 1;

    data.push(newData);

    res.status(201).json(data);
})

app.listen(PORT,()=>{
    console.log('Server running on port '+PORT);
})

// app.get('/data/:id',(req, res)=>{
//     const dataId = parseInt(req.params.id);
//     const perticularData = data.find(d => d.id == dataId);

//     if(perticularData){
//         res.json(perticularData);
//     }
//     else{
//         res.status(404).send('Product not found!!');
//     }

// })