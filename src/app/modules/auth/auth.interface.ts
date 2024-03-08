export type ILoginUser = {
  email: string;
  password: string;
};

export type ILoginUserResponse = {
  accessToken: string;
  refreshToken?: string;
  accessTokenExpiry: string;
  refreshTokenExpiry?: string;
};

export type IRefreshTokenResponse = {
  accessToken: string;
};
