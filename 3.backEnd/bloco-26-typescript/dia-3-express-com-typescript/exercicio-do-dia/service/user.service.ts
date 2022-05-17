import connection from '../models/connection';
import UserModel from '../models/user.model';
import User from '../interface/user.interface';
import { NotFoundError } from 'restify-errors';

class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async getAll(): Promise<User[]> {
    const users = await this.model.getAll();
    return users;
  }

  public async getById(id: number): Promise<User> {
    const user = await this.model.getById(id);
    return user;
  }

  public create(user: User): Promise<User> {
    return this.model.create(user);
  }

  public async update(id: number, user: User): Promise<User> {
    const userFound = await this.model.getById(id);
    if (!userFound) {
      throw new NotFoundError('NotFoundError');
    }
    return this.model.update(id, user);
  }

  public async remove(id: number): Promise<void> {
    const userFound = await this.model.getById(id);
    if (!userFound) {
      throw new NotFoundError('NotFoundError');
    }

    this.model.remove(id);
  }
}

export default UserService;