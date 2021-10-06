import express from "express";
import { UploadModel } from "../models";
import { IUploadFile, IUploadFileDocument } from "../models/Upload";

declare module 'express-serve-static-core' {
  interface Request {
    file: any,
    files: any,
    user: {
      userId: string;
    },
  }
}

class UploadController {
  create = (req: express.Request, res: express.Response): void => {
    const userId: string = req.user.userId;
    const file: any = req.files[0];
    const fileData = {
      filename: file.originalname,
      size: file.size,
      ext: file.originalname.split('.').pop(),
      url: file.path,
      user: userId,
    };

    const uploadFile: IUploadFileDocument = new UploadModel(fileData);

    uploadFile
      .save()
      .then((fileObj: IUploadFile) => {
        res.status(200).json({
          status: "success",
          result: fileObj,
        });
      })
      .catch((err: any) => {
        res.status(500).json({
          status: "error",
          message: err,
        });
      });
  };

  getFileById = async (req: express.Request, res: express.Response) => {
    const id = req.params.id
    try {
      const file = await UploadModel.findById(id,  '_id filename size ext url user').exec();
      if (!file) {
        return res.status(404).json({
          message: "File not found",
        });
      }
      return res.status(200).json({
        result: file,
        status: 'success'
      })
    } catch(e: any) {
      res.status(500).json({
        error: e.message,
        status: 'error'
      })
    }
  }
}

export default UploadController;