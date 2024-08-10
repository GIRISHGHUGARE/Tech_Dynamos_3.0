const User = require('../models/userSchema.js');

const addUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const newUser = new User({
            name,
            email,
            password
        });

        await newUser.save();

        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
}

const findUsers = async (req, res) => {
    const findUser = await User.find()
    res.json({
        success: true,
        data: findUser,
    });
}

const deleteUser = async (req, res) => {
    const duser = await User.findByIdAndDelete(req.params.id);
    res.json({
        success: true,
        data: duser
    })
}

const updateUser = async (req, res) => {
    const uUser = await User.findByIdAndUpdate(req.params.id, req.body);
    res.json({
        success: true,
        data: uUser
    })
}


const login = async (req, res) => {
    try {

        const { email, password } = req.body;

        const userEmail = await User.findOne({ email });

        if (!userEmail) {
            return res.json({
                "User-email": "Not Found!!"
            });
        }

        if (password !== userEmail.password) {
            return res.json({
                "User-password": "Incorrect Password!!"
            });
        }

        return res.json({
            message: "validUser!!"
        });

    } catch (error) {
        console.error("Error in login:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};



module.exports = { addUser, findUsers, deleteUser, updateUser, login };
