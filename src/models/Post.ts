import { Schema, Document, model, Types } from "mongoose";
import moment from "moment-timezone";

export interface IPost extends Document {
  author: string;
  title: string,
  text: string | Array<Schema.Types.ObjectId>,
  createdAt: Date,
  updatedAt: Date,
}

const PostSchema: Schema = new Schema(
  {
    author: {
      type: Types.ObjectId,
      ref: 'User'
    },
    title: {
      type: String,
    },
    text: String || [{ type: Schema.Types.ObjectId, ref: "UploadFile" }],
    createdAt: {
      type: Date,
    },
    updatedAt: {
      type: Date,
    }
  },
);

PostSchema.pre<IPost>('save', function (next) {
  const dateKiev = moment.tz(Date.now(), "Europe/Kiev").toDate();
  this.updatedAt = dateKiev;
  if ( !this.createdAt ) {
    this.createdAt = dateKiev;
  }
  next();
});

const PostModel = model<IPost>("Post", PostSchema);

export default PostModel;
