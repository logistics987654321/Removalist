const mongoose = require("mongoose");

 require("dotenv").config();

mongoose
  .connect(process.env.MONGODB_URL2, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`DB connection successful`);
  })
  .catch((err) => console.log(`no connection`));
