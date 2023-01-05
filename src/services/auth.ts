import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user";
import { encrypt, verified } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";

const registerNewUser = async (user: User) => {
  const checkIs = await UserModel.findOne({ email: user.email });

  if (checkIs) return "ALREADY_REGISTERED";

  console.log({ user });

  const passHash = await encrypt(user.password);

  console.log({ ...user, password: passHash });

  const registerNewUser = await UserModel.create({ ...user, password: passHash });

  return registerNewUser;
};
const loginUser = async ({ email, password }: Auth): Promise<object | string> => {
  const checkIs = await UserModel.findOne({ email });

  if (!checkIs) return "NOT_FOUND_USER";

  const passwordHash = checkIs.password;
  const isCorrect = await verified(password, passwordHash);

  if (!isCorrect) return "PASSWORD_INCORRECT";

  const token = generateToken(checkIs._id.toString());

  return { user: checkIs, token };
};

export { registerNewUser, loginUser };
