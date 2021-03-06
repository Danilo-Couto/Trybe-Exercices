import { Pool, ResultSetHeader } from 'mysql2/promise';
import Post from '../../interface/post.interface';

export default class PostModel {

  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Post[]> {
    const result = await this.connection
      .execute('SELECT * FROM Posts');
    const [rows] = result;
    return rows as Post[];
  }

  public async getById(id: number): Promise<Post> {
    const result = await this.connection
      .execute('SELECT * FROM Posts WHERE id=?', [id]);
    const [rows] = result;
    const [post] = rows as Post[];
    return post;
  }

  public async create(post: Post): Promise<Post> {
    const { title, author, category, publicationDate} = post;
    const query =  'INSERT INTO Posts (title, author, category, publicationDate) VALUES (?, ?, ?, ?)';
    const values = [title, author, category, publicationDate];

    const result = await this.connection.execute<ResultSetHeader>(query, values);
    
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...post };
  }

  public async update(id: number, post: Post) {
    const { title, author, category} = post;
    
    const query = 'UPDATE Posts SET title = ?, author = ?, category = ? WHERE id = ?';
    const values = [title, author, category, id];
  
    await this.connection.execute(query, values);

    return post;
  }
  
  public async remove(id: number) {
    await this.connection.execute(
      'DELETE FROM Posts WHERE id=?',
      [id],
    );
  }

  public async getAllBySearchTerm(term: string): Promise<Post[]> {
    const query = `SELECT * FROM Posts WHERE title LIKE ? OR 
    author LIKE ? OR category LIKE ? OR publicationDate LIKE ?`;
    const values = [`%${term}%`, `%${term}%`, `%${term}%`, `%${term}%`];
  
    const [posts] = await this.connection.execute(query, values);
    return posts as Post[];
  }
}