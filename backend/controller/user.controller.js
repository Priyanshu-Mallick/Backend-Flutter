const UserService = require('../services/user.services');

exports.register = async (req, res, next) => {
    try {
        // console.log(req.body);  // Log the request body
        const { email, password } = req.body;
        const successRes = await UserService.registerUser(email, password);
        res.json({ status: true, success: "User Registered Successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: false, error: "Registration failed" });
    }
}

exports.login = async (req, res, next) => {
    try {
        // console.log(req.body);  // Log the request body
        const { email, password } = req.body;

        const user = await UserService.checkUser(email);

        if (!user) {
            throw new Error("User dont exist");
        }
        const isMatch = user.comparePassword(password);
        if (isMatch === false) {
            throw new Error("Password Invalid");
        }

        let tokenData = { _id: user._id, email: user.email };

        const token = await UserService.generateToken(tokenData, "secretKey", '1h')

        res.status(200).json({ status: true, token: token });


    } catch (error) {
        console.error(error);
        res.status(500).json({ status: false, error: "Registration failed" });
    }
}
