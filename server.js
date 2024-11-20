import Razorpay from "razorpay";
import "dotenv/config";

var instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET,
});

let INR = 333;
instance.payments.capture("v", 1000, INR);
