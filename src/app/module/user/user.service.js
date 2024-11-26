import User from "./user.model.js"
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";

const registration = async (userData) => {
    const data = { ...userData }
    const hashPassword = await bcrypt.hash(data?.password, 12)
    data.password = hashPassword;
    const result = await User.create(data)
    return result
}

const login = async (userData) => {
    const isUserExits = await User.findOne({ email: userData?.email })
    if (!isUserExits) {
        throw new Error('user not found')
    }

    const isPassword = await bcrypt.compare(userData?.password, isUserExits?.password)
    if (!isPassword) {
        throw new Error('password did not match')
    }

    const userObj = {
        email: isUserExits?.email,
        role: isUserExits.role
    }
    const token = jwt.sign(userObj, 'ticket123', { expiresIn: '7d' })
    return {
        data: isUserExits,
        token: token
    };
}

const logout = async () => {
    return { message: 'User logOut successfully' };
};



const userServices = {
    registration,
    login,
    logout
}

export default userServices;