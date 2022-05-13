import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import PostService from '../service/post.service';

const notFound = { message: 'Post not found!'};

export default class PostController {
  constructor(private postService = new PostService()) { }

  getPostById = async (id: number) => await this.postService.getById(id);

  public getAll = async (req: Request, res: Response) => {
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

  public async getBySearchTerm(req: Request, res: Response) {
    const search = req.query.search as string;
    const data = await this.postService.getBySearchTerm(search);
    console.log(search);

    if (!data) return res.status(StatusCodes.NOT_FOUND)
    .json(notFound);

    res.status(StatusCodes.OK).json(data);
  }
};