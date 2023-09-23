import mongoose from "mongoose";

// Replace with your MongoDB Atlas connection string
const mongoURI = 'mongodb+srv://shabeera:Shabeera@cluster0.ckymuw6.mongodb.net/?retryWrites=true&w=majority';
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