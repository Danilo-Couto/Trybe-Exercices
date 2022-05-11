import { Pool, ResultSetHeader } from 'mysql2/promise';
import User from '../interface/user.interface';

export default class UserModel {

  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<User[]> {
    const result = await this.connection
      .execute('SELECT * FROM Users');
    const [rows] = result;
    return rows as User[];
  }

  public async getById(id: number): Promise<User> {
    const result = await this.connection
      .execute('SELECT * FROM Users WHERE id=?', [id]);
    const [rows] = result;
    const [user] = rows as User[];
    return user;
  }

  public async create(user: User): Promise<User> {
    const { name, email, password } = user;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Users (name, email, password) VALUES (?, ?, ?)',
      [name, email, password],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...user };
  }

  public async update(id: number, user: User) {
    const { name, email, password } = user;
  
    const query = 'UPDATE Users SET name = ?, email = ?, password = ? WHERE id = ?';
    const values = [name, email, password, id];
  
    await this.connection.execute(query, values);

    return user;
  }
  
  public async remove(id: number) {
    await this.connection.execute(
      'DELETE FROM Users WHERE id=?',
      [id],
    );
  }
}