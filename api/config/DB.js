const mongoose = require("mongoose");

mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.DATABASE}`);
// .then((result) => {
//   console.log("database connect");
// })
// .catch((err) => {
//   console.log(error);
// });
