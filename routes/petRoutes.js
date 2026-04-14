import { Router } from 'express';
import { listarPets, buscarPetPorId, criarPet, atualizacao, remove_pet, atualizacao_completa, atualizacao_partes } from '../controllers/petController.js';
const router = Router();
router.get('/', listarPets);
router.get('/:id', buscarPetPorId);
router.post('/', criarPet);
router.put('/', atualizacao_completa)
router.patch('/',atualizacao_partes)
router.delete('/:id',remove_pet)
export default router;