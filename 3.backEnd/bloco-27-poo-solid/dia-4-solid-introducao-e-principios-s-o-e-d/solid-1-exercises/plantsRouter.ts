import { Request, Response, Router } from 'express';
import PlantsFactory from '../factories/ProductFactory';

const plantsRouter = Router();
const plantService = PlantsFactory.create();
const shitHappens = 'algo de errado aconteceu';

plantsRouter.get('/plants/', async (_req: Request, res: Response) => {
    try {
        const plants = await plantService.getPlants;
        return res.status(200).json(plants);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: shitHappens });
    }
});

plantsRouter.get('/plants/:id', async (req: Request, res: Response) => {
  try {
      const { id } = req.params;
      const plantById = await plantService.getPlantById(id);
      return res.status(200).json(plantById);
  } catch (error) {
      console.log(error);
      return res.status(500).json({ message: shitHappens });
  }
});

plantsRouter.delete('/plants/', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await plantService.removePlantById(id);
      return res.status(200).json('Plant removed');
  } catch (error) {
      console.log(error);
      return res.status(500).json({ message: shitHappens });
  }
});

plantsRouter.post('/plants/', async (req: Request, res: Response) => {
  try {
      const { plant } = req.body;
      const plantSaved = await plantService.savePlant(plant);
      return res.status(200).json(plantSaved);
  } catch (error) {
      console.log(error);
      return res.status(500).json({ message: shitHappens });
  }
});

export default plantsRouter;

/* 
GET /plants: retorna todas as plantas;
GET /plant/:id: retorna uma planta com o id;
DELETE /plant/:id: deleta uma planta com o id;
POST /plant/:id: sobrescreve a planta com id;
POST /plant: cria uma planta nova;
GET /sunny/:id: retorna uma planta que precisa de sol com o id.
 */