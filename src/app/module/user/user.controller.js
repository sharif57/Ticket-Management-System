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
        const { password, ...others } = result?.data.toObject()
        res.status(200).json({
            message: 'user login  successfully',
            success: true,
            data: others,
            token: result?.token
        })
    } catch (error) {
        // console.log(error)
        next(error)
    }
}

const logout = async (req, res, next) => {
    try {
        const result = await userServices.logout(); 
        res.status(200).json({
            message: result.message,
            success: true,
        });
    } catch (error) {
        next(error);
    }
};

const userController = {
    registration,
    login,
    logout
}

export default userController;