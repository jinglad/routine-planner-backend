import httpStatus from 'http-status';
import { Secret } from 'jsonwebtoken';
import config from '../../../config';
import ApiError from '../../../errors/ApiError';
import { jwtHelpers } from '../../../helpers/jwtHelpers';
import { User } from '../user/ user.model';
import { ILoginUser, ILoginUserResponse } from './auth.interface';

const loginUser = async (payload: ILoginUser): Promise<ILoginUserResponse> => {
  const { email, password } = payload;

  const isUserExist = await User.isUserExist(email);

  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User does not exist');
  }

  if (
    isUserExist.password &&
    !(await User.isPasswordMatched(password, isUserExist.password))
  ) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Password is incorrect');
  }

  //create access token & refresh token

  const { id: userId, email: userEmail } = isUserExist;
  const accessToken = jwtHelpers.createToken(
    { userId, userEmail },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string
  );

  const refreshToken = jwtHelpers.createToken(
    { userId, userEmail },
    config.jwt.refresh_secret as Secret,
    config.jwt.refresh_expires_in as string
  );

  const accessTokenExpiry = jwtHelpers.getExpiryDate(
    accessToken,
    config.jwt.expires_in as string
  );

  const refreshTokenExpiry = jwtHelpers.getExpiryDate(
    refreshToken,
    config.jwt.refresh_expires_in as string
  );

  return {
    accessToken,
    accessTokenExpiry: accessTokenExpiry as string,
    refreshToken,
    refreshTokenExpiry: refreshTokenExpiry as string,
  };
};

export const AuthService = {
  loginUser,
};
