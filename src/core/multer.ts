import multer from 'multer';
import fs from 'fs-extra';

const createDir = (rootDir: string, filename: string, typeName: string, cb: any) => {
  const DIR = `${rootDir}/${filename}/${typeName}`;
  fs.mkdir(DIR, { recursive: false }, (err) => {
    if (err) {
      console.log('createDir err: ', err);
      throw err;
    }
    cb(null, DIR);
  });
};

let filename = '';

const rootDir = 'public/uploads';

const createDestination = (_req: any, file: any, cb: any) => {
  try {
    const id = `f${(~~(Math.random() * 1e8)).toString(16)}`;
    filename = file.fieldname + '-' + Date.now() + id;
    fs.mkdir(`${rootDir}/${filename}`, { recursive: false }, (err) => {
      if (err) {
        console.log('mkdir-CreateDist: ', err.message);
        throw err;
      }

      const type = file.mimetype.replace(/\//gm, '-')
      createDir(rootDir, filename, type, cb);
    });
  } catch (err) {
    console.log('THIS ERR: ', err);
  }
};

const storageConfig = multer.diskStorage({
  destination: createDestination,
  filename: (_req, file, cb) => {
    cb(null, filename + '.' + file.originalname.split('.').pop());
  },
});

const uploader = multer({ storage: storageConfig });

export default uploader;