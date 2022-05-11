import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import UserService from '../service/user.service';

class UserController {
  constructor(private userService = new UserService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const users = await this.userService.getAll();
    res.status(StatusCodes.OK).json(users);
  };

  public getById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const user = await this.userService.getById(id);

    if (!user) {
      return res.status(StatusCodes.NOT_FOUND)
        .json({ message: 'User not found!'});
    }

    res.status(StatusCodes.OK).json(user);
  }

  public create = async (req: Request, res: Response) => {
    const user = req.body;

    const userCreated = await this.userService.create(user);
    res.status(StatusCodes.CREATED).json(userCreated);
  };

  public update = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const user = req.body;
    const userUpdated = await this.userService.update(id, user);
    console.log(userUpdated.email);
    res.status(StatusCodes.OK).json({ message: `${userUpdated.email} updated successfully` });
  };

  public remove = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    await this.userService.remove(id);

    res.status(StatusCodes.OK).json({ message: 'User deleted successfully' });
  };
}

export default UserController;