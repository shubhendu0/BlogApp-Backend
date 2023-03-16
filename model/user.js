import mongoose from 'mongoose';


const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username : {
        type: String,
        required: [true, "Please provide unique username"],
        unique: [true, "This username is already in use"],
    },
    email : {
        type: String,
        required: [true, "Please provide unique email"],
        unique: [true, "This email is already in use"],
    },
    password: {
        type: String,
        required: true
    }
});

const user = mongoose.model('user', userSchema);
export default user;