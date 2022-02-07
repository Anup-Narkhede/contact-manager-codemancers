const Contact = require("../models/contactModel");

const getAllContacts = async (req, res) => {
  try {
    const contact = await Contact.find();
    res.status(201).json(contact);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
const createContact = async (req, res) => {
  try {
    const contact = await Contact.create(req.body);
    res.status(201).json(contact);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
const getContact = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({ Message: "Contact Not found" });
    }
    res.status(201).json(contact);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
const updateContact = async (req, res) => {
  try {
    const id = req.params.id;
    const contact = await Contact.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });

    if (!contact) {
      return res.status(404).json({ Message: "Contact Not found" });
    }
    res.status(201).json(contact);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);

    if (!contact) {
      return res.status(404).json({ Message: "Contact Not found" });
    }
    res.status(201).json(contact);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = {
  getAllContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
