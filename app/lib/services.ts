import bcryptjs from "bcryptjs";

export const hasPassword = (password: string): string => {
  return bcryptjs.hashSync(password, bcryptjs.genSaltSync(10));
};
