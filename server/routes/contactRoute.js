const express = require("express");
const contactRouter = express.Router();

const {
  getAllContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");

contactRouter.route("/").get(getAllContacts).post(createContact);
contactRouter
  .route("/:id")
  .get(getContact)
  .put(updateContact)
  .delete(deleteContact);

module.exports = contactRouter;
