import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { IContact } from "../../interfaces/contacts.interface";
import { IUserData } from "../../interfaces/users.interfaces";
import { createContactService } from "../../services/contacts/createContact.service";

const createContactController = async (req: Request, res: Response) => {
  const userData: IUserData = req.user;
  const contactData: IContact = req.body;
  const contact = await createContactService(userData, contactData);
  return res.status(201).json(instanceToPlain(contact));
};

export default createContactController;
