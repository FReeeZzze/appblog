import express from 'express';
import path from 'path';

class HomeController {
  index (_req: express.Request, res: express.Response) {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
  }
}

export default HomeController;

