import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";
import { IUser } from "../../interfaces/users.interfaces";
import { hashSync } from "bcryptjs";

export const createUserService = async (userData: IUser) => {
  const userRepository = AppDataSource.getRepository(User);

  const userAlreadyExists = await userRepository.findOneBy({
    email: userData.email,
  });

  if (userAlreadyExists) {
    throw new AppError(400, "Email is already being used!");
  }

  const newUser = userRepository.create({
    ...userData,
    phone: userData.phone + "",
    password: hashSync(userData.password, 10),
  });
  await userRepository.save(newUser);

  return newUser;
};
