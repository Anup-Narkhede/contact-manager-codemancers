const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: ["true", "Name field is required"],
  },
  email: {
    type: String,
    required: ["true", "Email field is required"],
  },
  phone: {
    type: String,
    required: ["true", "Phone field is required"],
  },
});

module.exports = mongoose.model("Contact", contactSchema);
