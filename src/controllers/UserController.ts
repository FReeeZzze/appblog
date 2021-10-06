import express from "express";
import { UserModel } from "../models";
// import { IUser } from "../models/User";

declare module 'express-serve-static-core' {
  interface Request {
    user: {
      userId: string;
    },
  }
}

class UserController {
  getUserById = async (req: express.Request, res: express.Response) => {
    try {
      const id: string = req.params.id ? req.params.id : req.user.userId;
      const user = await UserModel.findById(id,  '_id username email name avatar').exec();
      if (!user) {
        return res.status(404).json({
          message: "User not found",
        });
      }
      return res.status(200).json({
        result: user,
        status: 'success'
      })

    } catch (e: any) {
      res.status(500).json({
        error: e.message,
        status: 'error'
      })
    }
  };
}

export default UserController;
