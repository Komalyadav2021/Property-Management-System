const mongoose = require("mongoose");
mongoose
  .connect("mongodb+srv://komal__0309:visQE37Pw02Mc4gB@komalyadav.lgv9zvh.mongodb.net/komalyadav?retryWrites=true&w=majority", {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("connected");
  })
  .catch((error) => {
    console.log(error);
  });

