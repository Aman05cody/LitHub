import express from "express";
import {
  createContact,
  getAllContacts,
  deleteContact,
} from "../controller/contact.controller.js";

const router = express.Router();

// Create contact
router.post("/", createContact);

// Get all contacts
router.get("/", getAllContacts);

// Delete contact
router.delete("/:id", deleteContact);

export default router;
