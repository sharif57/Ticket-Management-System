import jwt from "jsonwebtoken"
import User from "../app/module/user/user.model"

export const isAdmin = async (req, res, next) => {
    const token = req.headers.authorization
    const decode = jwt.verify(token, "restaurant123")
    const isUserExist = await User.findById(decode?.userId)
    if (!isUserExist) {
        throw new AppError(400, "user not exist")
    }

    if (decode?.role !== "admin") {
        throw new AppError(401, "you are not authorized")
    }

    next()
}

export const isCustomer = async (req, res, next) => {
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
