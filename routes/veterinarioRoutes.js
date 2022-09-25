import express from 'express';
import {
    registrar, 
    perfil, 
    confirmar, 
    autenticar, 
    forgotPassword, 
    comprobarToken, 
    nuevoPassword,
    actualizarPerfil,
    actualizarPassword
} from '../controllers/veterinarioController.js';
import checkAuth from '../middleware/authMiddleware.js';

const router = express.Router();

//Area Publica
router.post('/', registrar);
router.get('/confirmar/:token', confirmar);
router.post('/login', autenticar);
router.post('/forgot-password', forgotPassword);
router.route('/forgot-password/:token').get(comprobarToken).post(nuevoPassword);

//Area Privada
router.get('/perfil', checkAuth, perfil);
router.put('/perfil/:id', checkAuth, actualizarPerfil)
router.put('/actualizar-password', checkAuth, actualizarPassword);

export default router;