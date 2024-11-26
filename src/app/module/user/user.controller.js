import userServices from "./user.service.js"


const registration = async (req, res, next) => {
    try {
        const result = await userServices.registration(req.body)
        res.status(200).json({
            message: 'user registration successfully',
            success: true,
            data: result
        })
    } catch (error) {
        // console.log(error)
        next(error)
    }
}

const login = async (req, res, next) => {
    try {
        const result = await userServices.login(req.body)
        res.status(200).json({
            message: 'user login  successfully',
            success: true,
            data: result
        })
    } catch (error) {
        // console.log(error)
        next(error)
    }
}

const userController ={
    registration,
    login
}

export default userController;