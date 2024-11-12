import express from 'express';
import { etiquetasController } from '../controller/etiquetas';

const router = express.Router();
const controller = new etiquetasController();

router.get('/:page/:limit', async (req, res) => {
    controller.getAll(req, res);
});

router.get('/user/:userId/etiqueta/:etiquetaId', async (req, res) => {
    controller.getEtiquetaByUser(req, res);
});

router.post('/', async (req, res) => {
    controller.create(req, res);
});

router.put('/:id', async (req, res) => {
    controller.update(req, res);
});

router.delete('/:id', async (req, res) => {
    controller.delete(req, res);
});

export default router;
