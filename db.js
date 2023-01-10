const mongoose = require("mongoose");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

//

const connectionString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PW}@cluster0.jdree4n.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

mongoose.set("strictQuery", false);
mongoose.connect(connectionString, options, (err) => {
  if (err) {
    console.log(`Hubo un error: ${err}`);
  } else {
    console.log("Conexion a la base de datos exitosa");
  }
});
