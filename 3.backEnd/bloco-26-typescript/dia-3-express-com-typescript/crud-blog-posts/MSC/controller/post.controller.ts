import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import PostService from '../service/post.service';

const notFound = { message: 'Post not found!'};

export default class PostController {
  constructor(private postService = new PostService()) { }

  getPostById = async (id: number) => await this.postService.getById(id);

  getBySearchTerm = async (query: string,  res: Response) => {
    const data = await this.postService.getBySearchTerm(query);

    if (!data || data.length === 0) return res.status(StatusCodes.NOT_FOUND)
    .json(notFound);

    res.status(StatusCodes.OK).json(data);
  }
  
  public getAll = async (req: Request, res: Response) => {
    const query = req.query.q as string;

    if (query) return this.getBySearchTerm(query, res);

    const posts = await this.postService.getAll();
    res.status(StatusCodes.OK).json(posts);
  };
  
  public getById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const post = await this.getPostById(id);

    if (!post) return res.status(StatusCodes.NOT_FOUND)
        .json(notFound);

    res.status(StatusCodes.OK).json(post);
  }

  public create = async (req: Request, res: Response) => {
    const post = req.body;
    const postCreated = await this.postService.create(post);

    res.status(StatusCodes.CREATED).json(postCreated);
  };

  public update = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const postToUpdate = req.body;
    const post = await this.getPostById(id);

    if (!post) return res.status(StatusCodes.NOT_FOUND)
        .json(notFound);

    const postUpdated = await this.postService.update(id, postToUpdate);
    res.status(StatusCodes.OK).json({ message: `${postUpdated.author} post ${id} was updated successfully` });
  };

  public remove = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const post = await this.getPostById(id);

    if (!post) return res.status(StatusCodes.NOT_FOUND)
        .json(notFound);

    await this.postService.remove(id);

    res.status(StatusCodes.OK).json({ message: 'Post deleted successfully' });
  };

};