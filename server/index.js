const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const contact = require("./routes/contactRoute");
const connectDB = require("./db/connect");
const cors = require("cors");
const path = require("path");
require("dotenv/config");

//middlewares
app.use(cors());
app.use(express.json());
app.use("/api/v1/contact", contact);

// const __dirname1 = path.resolve();

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname1, "/client/build")));

//   app.get("*", (req, res) =>
//     res.sendFile(path.resolve(__dirname1, "client", "build", "index.html"))
//   );
// } else {
//   app.get("/", (req, res) => {
//     res.send("API is running..");
//   });
// }

const start = async () => {
  try {
    await connectDB(
      "mongodb+srv://anupnarkhede871:anupnarkhede871@cluster0.vaub2.mongodb.net/contact-manager?retryWrites=true&w=majority"
    );
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}/`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
