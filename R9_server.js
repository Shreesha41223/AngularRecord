const express = require('express');
const app = express();
const cors = require('cors')
const PORT = 3000;

app.use(cors());

app.get('',(req, res)=>{
    res.send('Server Working!!')
})

const data=[
    {name:'ABCD',age:20},
    {name:'EFGH',age:21}
];

app.get('/data',(req, res)=>{
    res.json(data);
});

app.listen(PORT,()=>{
    console.log("Server is running on port number "+PORT);
});