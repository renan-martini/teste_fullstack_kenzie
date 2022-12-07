import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";
import { IUser, IUserData } from "../../interfaces/users.interfaces";
import { hashSync } from "bcryptjs";
import { IContact } from "../../interfaces/contacts.interface";
import { Contact } from "../../entities/contact.entity";

export const createContactService = async (
  userData: IUserData,
  contactData: IContact
) => {
  const userRepository = AppDataSource.getRepository(User);
  const contactRepository = AppDataSource.getRepository(Contact);

  const [LoggedUser] = await userRepository.find({
    where: {
      email: userData.email,
    },
  });
  const phone = contactData.phone + "";
  const contact = contactRepository.create({
    ...contactData,
    phone,
    user: LoggedUser,
  });
  await contactRepository.save(contact);

  const [LoggedUserUpdated] = await userRepository.find({
    where: {
      email: userData.email,
    },
    relations: {
      contacts: true,
    },
  });

  return LoggedUserUpdated;
};
