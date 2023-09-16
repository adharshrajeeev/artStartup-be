import mongoose from "mongoose";

// Replace with your MongoDB Atlas connection string
const mongoURI = 'mongodb+srv://adharshrajeeev2000:QU8RGTzDlWIhZQQJ@cluster0.gslnyqh.mongodb.net/artStartup?retryWrites=true&w=majority';
const connectDB = async () => {
    try {
      await mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Connected to MongoDB Atlas');
    } catch (error) {
      console.error('MongoDB connection error:', error);
    }
  };
  
  export default connectDB;