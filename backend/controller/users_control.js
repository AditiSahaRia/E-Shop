const ErrorHander = require("../utils/error_handler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../model/user_model");

// User Register
exports.registerUser = catchAsyncErrors(
    async (req, res, next) => {

        const {name, email, password} = req.body;
        const user = await User.create({
            name,
            email,
            password,
            avatar: {
                public_id: "This is a sample id",
                url: "profilePictureURL"
            }
        })

        const token = user.getJWTToken();

        res.status(201).json({
            success: true,
            user,
            token
        })
    }
)
  