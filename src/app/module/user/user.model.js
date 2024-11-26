import { model, Schema } from "mongoose";


const UserSchema = new Schema({
    name: {
        type: String,
        require: [true, 'name is require']
    },
    email: {
        type: String,
        require: [true, 'email is require']
    },
    password: {
        type: String,
        require: [true, 'password is require']
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    image: {
        type: String
    }
}, {
    timestamps: true
})


const User = model("User", UserSchema)

export default User;