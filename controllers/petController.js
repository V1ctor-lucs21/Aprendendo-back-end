// Simulação de banco de dados
import { pets } from '../data/petData.js';
export const listarPets = (req, res) => {
 res.status(200).json(pets);
};
export const buscarPetPorId = (req, res) => {
 const { id } = req.params;
 const pet = pets.find(p => p.id === Number(id));
 if (!pet) return res.status(404).json({ mensagem: "Pet não encontrado" });
 res.status(200).json(pet);
};
export const criarPet = (req, res) => {
 const novoPet = { id: Date.now(), ...req.body };
 pets.push(novoPet);
 res.status(201).json(novoPet);
};

export const atualizacao_partes= (req,res) =>{
    const {id}= req.params
    const pet= pets. find(p=> p.id === Number(id));
    if(!pet) return res.status(404).json({message: "Pet não encontrado, tente novamente!"});
    if(req.body.nome) pet.nome= req.body.nome;
    if(req.body.nome) pet.especie= req.body.especie
    if(req.body.raça) pet.raça = req.body.raça
    if(req.body.idade) pet.idade = req.body.idade
    res.json(pet)
}

export const remove_pet =('/pets/remove/:id', (req,res)=>{
    const {id}= req.params
    const tamanhoInicial= pet.length
    const pet = pets.find(p=>p.id === Number(id))

    if(pets.length === tamanhoInicial){
        return res.status(404).json({message: "Pet não foi encontrado, Verifique se está correto e tente novamente"});
    }

    res.status(204).send()
})

export const atualizacao_completa=('/pet/:id', (req,res)=>{
    const {id}=req.params;
    const index= pets.findIndex(p => p.id === Number(id));

    if( index ===-1){
        res.status(404).json({message:"pet não encontrado"});
    }
    pets[index]={id: Number(id), ...req.body};
    res.json(pets[index]);
})