import express from "express";
import { check } from 'express-validator';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import uploader from "../core/multer";
const multiType = uploader.array('fileData', 2);

import { UserCtrl, HomeCtrl, AuthCtrl, PostCtrl, UploadCtrl } from "../controllers";
import auth from '../middleware/auth.middleware';

// состояние приложения
const dev = process.env.NODE_ENV !== 'production';

// конструктор роутов
const createRoutes = (app: express.Express) => {
  // список контроллеров для роутов
  const HomeController = new HomeCtrl();
  const AuthController = new AuthCtrl();
  const UserController = new UserCtrl();
  const PostController = new PostCtrl();
  const UploadController = new UploadCtrl();

  // промежуточное ПО
  app.use(express.urlencoded({extended: true}));
  app.use(express.json())
  app.use('/public', express.static('public'));
  app.use(logger(dev ? 'dev' : 'production'));
  app.use(cookieParser());
  app.use((_req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    next();
  });

  /* === запросы для точки '/' контроллера HomeController === */
  app.get("/", HomeController.index);

  /* === запросы для точки '/api/auth' контроллера AuthController === */

  app.post("/api/auth/register", [
    check('email', 'Некорректный email').isEmail(),
    check('password', 'Минимальная длинна пароля 6 символов').isLength({ min: 6})
  ],  AuthController.register);

  app.post("/api/auth/login", [
    check('email', 'Введите корректный email').normalizeEmail().isEmail(),
    check('password', 'Введите пароль').exists(),
  ], AuthController.login);

  /* === запросы для точки '/api/user' контроллера UserController === */

  app.get("/api/users/me", auth, UserController.getUserById);
  app.get("/api/users/:id", UserController.getUserById);

  /* === запросы для точки '/api/posts' контроллера PostController === */

  app.get("/api/posts", PostController.getPosts);
  app.get("/api/posts/:page", PostController.getPosts);
  app.post("/api/posts",  auth, PostController.createPost);

  /* === запросы для точки '/api/files' контроллера MessageController === */
  app.get("/api/files/:id", UploadController.getFileById);
  app.post("/api/files", [auth, multiType], UploadController.create);
};

export default createRoutes;
