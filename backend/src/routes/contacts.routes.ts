import { Router } from "express";
import createContactController from "../controllers/contacts/createContact.controller";
import { validateSchemaMiddleware } from "../middlewares/validateSchema.middleware";
import { ensureAuth } from "../middlewares/validateToken.middleware";
import { contactSchema } from "../schemas/contact.schema";

export const contactsRoute = Router();

contactsRoute.post(
  "/",
  ensureAuth,
  validateSchemaMiddleware(contactSchema),
  createContactController
);
