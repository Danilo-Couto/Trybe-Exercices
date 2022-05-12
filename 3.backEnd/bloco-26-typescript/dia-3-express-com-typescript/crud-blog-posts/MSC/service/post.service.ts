import connection from '../models/connection';
import PostModel from '../models/post.model';
import Post from '../../interface/post.interface';

export default class postService {
  public model: PostModel;

  constructor() {
    this.model = new PostModel(connection);
  }

  public async getAll(): Promise<Post[]> {
    const posts = await this.model.getAll();
    return posts;
  }

  public async getById(id: number): Promise<Post> {
    const post = await this.model.getById(id);
    return post;
  }

  public create(post: Post): Promise<Post> {
    return this.model.create(post);
  }

  public async update(id: number, post: Post): Promise<Post> {
    const postFound = await this.model.getById(id);
    return this.model.update(id, postFound);
  }

  public async remove(id: number): Promise<void> {
    const postFound = await this.model.getById(id);
    this.model.remove(id);
  }
};