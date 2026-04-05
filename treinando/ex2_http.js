import express from 'express';

const app=express();
const PORT=3000;

app.use(express.json());

app.get('/echo/:category',(req,res)=>{
    const category=req.params.category;
    const limit=req.query.limit;
    
    res.status(200).json({
        message:`A requisição foi aceita e processada, a categoria pesquisada foi ${category} e o maximo de resultados é de ${limit}`
    });
});

app.listen(PORT,()=>{
    console.log(`Servidor rodando na porta ${PORT}`);
})