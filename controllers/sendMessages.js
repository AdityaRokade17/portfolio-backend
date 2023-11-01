const User = require("../models/User");

exports.sendMessage = async (req, res) => {
    try {
        console.log(req.body);

        const { name, email, comment } = req.body;
        console.log(req.body);
        if (!name || !email || !comment) {
            console.log("not all fields...");
            return res.status(400).json({
                status: 400,
                message: "Please fill all fields",
            });
        }

        const user = await User.create({
            name,
            email,
            comment,
        });

        return res.status(201).json({
            status: 201,
            message: "Message sent successfully",
            data: user,
        });
    } catch (error) {
        console.error("error", error);
        return res.status(500).json({
            status: 500,
            message: error.message,
        });
    }
};
