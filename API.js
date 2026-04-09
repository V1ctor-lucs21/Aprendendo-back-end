import express from 'express'

const app=express();

//- inicializando o server-//

const PORTA= 3000;

// --- BANCO DE DADOS EM MEMÓRIA (VETOR) ---
// Para simplificar, usaremos um vetor para armazenar os dados dos pets.
// Em uma aplicação real, você usaria um banco de dados como PostgreSQL, MongoDB, etc.
// 1. Nosso "Banco de Dados" temporário
let pets = [
    { id: 1, nome: "Paçocão", especie: "Cão", raça: "Labrador", idade: 3 },
    { id: 2, nome: "Frajola", especie: "Gato", raça: "SRD", idade: 5 }
   ];

app.use(express.json());

// READ (Buscar um pet específico por ID)
app.get("/pets",(req,res)=>{
    res.status(200).json(pets)
})
app.get('/pets/:id' , (req, res) => {
    const { id } = req.params; // Pegamos o ID da URL
   
    // IMPORTANTE: O ID que vem da URL é uma String.
    // Precisamos converter para Number para comparar com o nosso array.
    const pet = pets.find(p => p.id === Number(id));
    // Se o pet não existir, retornamos 404
    if (!pet) {
    return res.status(404).json({ mensagem: "Pet não encontrado!" });
    }
   
    res.status(200).json(pet)
});

app.post('/pets',(req,res)=>{
    const {nome,especie,raça,idade}= req.body;
    const pet={id: pets.length+1,nome,especie,raça,idade};
    pets.push(pet)
    res.status(201).json(pet)
});

app.put('/pet/:id', (req,res)=>{
    const {id}=req.params;
    const index= pets.findIndex(p => p.id === Number(id));

    if( index ===-1){
        res.status(404).json({message:"pet não encontrado"});
    }
    pets[index]={id: Number(id), ...req.body};
    res.json(pets[index]);
})
// UPDATE (Atualização Parcial - PATCH)
app.patch('/pets/:id' , (req, res) => {
    const { id } = req.params;
    const pet = pets. find(p => p.id === Number(id));
    if (!pet) return res.status(404).json({ mensagem: "Pet não encontrado" });
    // Atualiza apenas o que foi enviado
    if (req.body.nome) pet.nome = req.body.nome;
    if (req.body.especie) pet.especie = req.body.especie;
    if (req.body.raça) pet.raça = req.body.raça;
    if (req.body.idade) pet.idade = req.body.idade;
    res.json(pet);
   });

   // DELETE (Remover pet)
app.delete('/pets/:id' , (req, res) => {
    const { id } = req.params;
    const tamanhoInicial = pets.length;
   
    pets = pets. filter(p => p.id !== Number(id));
    if (pets.length === tamanhoInicial) {
    return res.status(404).json({ mensagem: "Pet não encontrado" });
    }
    res.status(204).send(); // 204: Sucesso, mas sem conteúdo no corpo
   });

app.use((req, res, next) => {
    res.status(404).json({ mensagem: "A rota solicitada não existe." });
   });

// Middleware de Logging
// Este middleware será executado para cada requisição que chegar ao servidor.
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}` );
    next(); // Chama o próximo middleware ou rota
   });
app.listen(PORTA,()=>{
    console.log(`🐾 API PetShop online na porta ${PORTA}`);
    console.log(`Acesse: http://localhost:${PORTA}/pets`);
});