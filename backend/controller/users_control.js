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
            token
        })
    }
)

// Login User
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body;
  
    // checking if user has given password and email both
  
    if (!email || !password) {
        return next(new ErrorHander("Please Enter Email & Password", 400));
    }
  
    const user = await User.findOne({ email }).select("+password");
  
    if (!user) {
        return next(new ErrorHander("Invalid email or password", 401));
    }
  
    const isPasswordMatched = await user.comparePassword(password);
  
    if (!isPasswordMatched){
        return next(new ErrorHander("Invalid email or password", 401));
    }

    const token = user.getJWTToken();

    res.status(200).json({
        success: true,
        token
    })
    // sendToken(user, 200, res);
})