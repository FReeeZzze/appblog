import express from 'express';
import { PostModel } from "../models";
import { IPost } from "../models/Post";
import handleError from "../utils/handle.error";
import Pagination from "../core/Pagination";

declare module 'express-serve-static-core' {
  interface Request {
    user: {
      userId: string;
    },
  }
}

class PostController {
  getPosts = (req: express.Request, res: express.Response) => {
    try {
      const page = parseInt(req.params.page)
      const currentPage = page > 0 ? page : 1
      const itemsPerPage = 20

      PostModel
        .find({})
        .exec((err: any, posts: IPost[]) => {
          if (err) {
            return res.status(500).json({
              error: err.message
            });
          }

          const pageCount = Math.ceil(posts.length / itemsPerPage);

          if (currentPage > pageCount) {
            return res.status(404).json({
              message: 'Такой страницы нет',
              status: 'warn'
            })
          }

          const Paginate = new Pagination(posts, pageCount, currentPage, itemsPerPage);

          return res.status(200).json({
            result: Paginate.resultItems(),
            pagination: Paginate.resultPages()
          })
        });
    } catch (e: any) {
      return handleError(500, e.message, res);
    }
  };

  createPost = async (req: express.Request, res: express.Response) => {
    try {
      const myId: string = req.user.userId;

      const postData = {
        title: req.body.title,
        text: req.body.text,
        author: myId,
      };

      if (!postData.title) {
        postData.title = 'Без заголовка'
      } 

      if (!postData.text) {
        return res.status(400).json({
          status: 'warn',
          message: 'Вы не заполнили поле текст'
        })
      }

      const post = new PostModel(postData);

      post
        .save()
        .then((obj: IPost) => {
          obj.populate((err: any, createdPost: IPost) => {
              if (err) {
                return res.status(500).json({
                  status: "error",
                  message: err.message,
                });
              }

              res.status(200).json(createdPost);
            }
          );
        });

    } catch (e: any) {
      return handleError(500, e.message, res);
    }
  }
}

export default PostController;

