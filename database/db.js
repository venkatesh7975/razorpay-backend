import { connect } from "mongoose";

const connectToMongo = async () => {
  try {
    await connect(
      "mongodb+srv://root:root@razorpay.emjiy.mongodb.net/?retryWrites=true&w=majority&appName=razorpay",
      {
        dbName: "paymentGateway",
      }
    );
    console.log("---***Database Connected Successfully***---");
  } catch (error) {
    console.log(error);
  }
};

export default connectToMongo;
