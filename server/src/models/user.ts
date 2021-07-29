const mongoose = require("mongoose"); // this somehow fixed the mongoose module error idk

const userSchema = mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
  id: { type: String },
});

export default mongoose.model("User", userSchema);
