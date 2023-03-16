import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb+srv://ShubhenduBora:titan123@cluster0.szpoh1n.mongodb.net/blogapp`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } 
    catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;