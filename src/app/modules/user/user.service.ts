/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { User } from './ user.model';
import { IUser } from './user.interface';

const createUser = async (
  user: IUser
): Promise<Omit<IUser, 'password'> | null> => {
  const result = await User.create(user);
  const { password, ...userWithoutPassword } = result.toObject();
  return userWithoutPassword;
};

export const UserService = {
  createUser,
};
