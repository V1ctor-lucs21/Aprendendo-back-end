import express from 'express';

const app=express();
const PORT=3000;

app.get('/club/enter',(req,res)=>{
    const age= parseInt(req.query.age);
    if(isNaN(age)){
        return res.status(400).json({erro:"Idade é obrigatória para o acesso!"});
    }
    else if(age<18){
        return res.status(403).json({allow:false, message:"Acesso negado. Vocé não tem a idade necessaária para entrar no clube."});
    }
    else{
        return res.status(200).json({allow:true, message:"Bem-vindo ao clube!"});
    }
});

app.listen(PORT,()=>{
    console.log(`🚀 Server running at http://localhost:${PORT}/club/enter?`);
})