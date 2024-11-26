import jwt from "jsonwebtoken"
import User from "../user/user.model.js"
import AppError from "../error/AppError.js"

export const isAdmin = async (req, res, next) => {
    const token = req.headers.authorization
    const decode = jwt.verify(token, "ticket123")
    const isUserExist = await User.findById(decode?.userId)
    if (!isUserExist) {
        throw new AppError(400, "user not exist")
    }

    if (decode?.role !== "admin") {
        throw new AppError(401, "you are not authorized")
    }

    next()
}

export const isUser = async (req, res, next) => {
    const token = req.headers.authorization
    const decode = jwt.verify(token, "ticket123")
    const isUserExist = await User.findById(decode?.userId)
    if (!isUserExist) {
        throw new AppError(400, "user not exist")
    }
    if (decode?.role !== "user") {
        throw new AppError(401, "you are not authorized")
    }

    req.user = decode
    next()
}
