const { User } = require("../model/userModel")


const addUser = async (req, res) => {

    try {

        const { name, email, phone } = req.body
        const user = await User.create({ name, email, phone })
        if (!user) {
            return res.json({
                meta: { msg: "User create failed", status: false },
            });
        }

        return res.status(200).json({
            meta: { msg: "User created successfully", status: true },
            data: user
        });
    } catch (error) {
        return res.json({
            meta: { msg: error.message, status: false },
        });
    }

}

const listUser = async (req, res) => {

    try {


        const users = await User.find({})
        if (!users.length) {
            return res.json({
                meta: { msg: "User list not found", status: false },
            });
        }

        return res.status(200).json({
            meta: { msg: "User list found successfully", status: true },
            data: users
        });
    } catch (error) {
        return res.json({
            meta: { msg: error.message, status: false },
        });
    }

}

const deleteUser = async (req, res) => {

    try {

        const { userId } = req.params
        // console.log(user);
        
        const user = await User.findByIdAndDelete(userId)
        if (!user) {
            return res.json({
                meta: { msg: "User not delete", status: false },
            });
        }

        return res.status(200).json({
            meta: { msg: "User delete successfully", status: true },
            data: user
        });
    } catch (error) {
        return res.json({
            meta: { msg: error.message, status: false },
        });
    }

}


module.exports = { addUser, listUser, deleteUser }