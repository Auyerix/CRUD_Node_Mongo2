import mongoose from "mongoose";
import { MONGODB_URI } from "./config.js";

mongoose.set("strictQuery", false); // linea agregada por compativilidad con futura versiòn mongose 7


(async () =>{
  try {
    const db = await mongoose.connect(MONGODB_URI);
    //const db = mongoose.connect(MONGODB_URI);
    console.log("Connected to ", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();


mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected");
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose is disconnected");
});

