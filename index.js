import express from "express";
 import mongoose from "mongoose";
 

const app = express()



app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/school")
  .then(() => {
    console.log("DB connected!");
  })
  .catch((err) => {
    console.log(err);
  });


app.get("/", (req, res) => {
  res.send("Hi");
});

const UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
});

const User = mongoose.model("User", UserSchema);

app.get("/create", async (req, res) => {
  const user = await User.create({
    name: "Anus",
    age: 40,
    gender: "Male",
  });

  res.send(user);
});



app.get("/users", async (req, res) => {
  const users = await User.find();

  res.send(users);
});



app.listen(4000, () => {
  console.log("Server running on port 4000");
});