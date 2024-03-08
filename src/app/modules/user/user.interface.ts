/* eslint-disable no-unused-vars */

import { Model } from 'mongoose';

export type IUser = {
  id: string;
  email: string;
  password: string;
  name: string;
};

export type UserModel = {
  isUserExist(email: string): Promise<IUser>;
  isPasswordMatched(
    givenPassword: string,
    savedPassword: string
  ): Promise<boolean>;
} & Model<IUser>;
