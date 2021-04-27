import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://DaveMath:DaveMathPassword@cluster0.nuyrz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Aplicação conectada ao MongoDB!");
  })
  .catch((error) => {
    console.log(`Erro ao conectar com o MongoDB: ${error}`);
  });

export { mongoose };