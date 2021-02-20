const app = require("./app");
const mongoose = require("mongoose");
const port = 8000;
mongoose
  .connect(
    "mongodb+srv://aziz:c6YJr32doABDPUji@cluster0.ivsx8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("DB connection succesful! "));
app.listen(port, () => {
  console.log(`App running on ${port}...`);
});
