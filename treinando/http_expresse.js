import express from 'express';

const app = express();
const PORT= 3000;
app.get('/api/hello',(req,res)=>{
    res.status(200).json({
        message:"Ola do Express, do node JS!"
    });
});
app.get('/api/health',(req,res)=>{
    res.status(200).json({
        message:"System is healthy"
    });
});
app.get('/api/admin',(req,res)=>{
    res.status(403).json({
        error:"Access Denied"
    });
});
app.get('/api/info',(req,res)=>{
    res.status(200).json({
        version:"1.0.0 ",
        author:"Victor Lucas",
        description:"API de exemplo usando Express"
    });
});

app.listen(PORT,()=>{
    console.log(`🚀 Express server running at http://localhost:${PORT}/api/hello`);
})