import { Schema, Document, model, Types } from "mongoose";
import { isEmail } from "validator";
import moment from "moment-timezone";

export interface IUser extends Document {
  email: string;
  name: string;
  password: string;
  avatar: string;
  confirmed: boolean;
  confirm_hash: string;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema: Schema = new Schema(
  {
    email: {
      type: String,
      required: true,
      validate: [isEmail, "Invalid email"],
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: String,
    confirmed: {
      type: Boolean,
      default: false,
    },
    confirm_hash: String,
    createdAt: {
      type: Date,
    },
    updatedAt: {
      type: Date,
    }
  }
);

UserSchema.pre<IUser>('save', function (next) {
  const dateKiev = moment.tz(Date.now(), "Europe/Kiev").toDate();
  this.updatedAt = dateKiev;
  if ( !this.createdAt ) {
    this.createdAt = dateKiev;
  }
  next();
});

const UserModel = model<IUser>("User", UserSchema);

export default UserModel;


