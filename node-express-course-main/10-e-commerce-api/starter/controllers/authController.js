
const User = require('../models/User')
const {StatusCodes} = require('http-status-codes')
const CustomError = require('../errors');
//const User = require('../models/User');
const {attachCookiesToResponse, createTokenUser} = require('../utils')

const register = async (req,res) =>{
    const {email, name, password} = req.body;

    const emailAlreadyExists = await User.findOne({email})
    if(emailAlreadyExists){
        throw new CustomError.BadRequestError('email alreay exists')
    }
    
    // first registered user is the admin 
    const isFirstAccount = await User.countDocuments({}) === 0 ;
    const role = isFirstAccount ? 'admin' : 'user';
    
    const user = await User.create({name, email, password, role})
    const tokenUser = createTokenUser(user)
    attachCookiesToResponse({res, user:tokenUser})
    res.status(StatusCodes.CREATED).json({user:tokenUser })
};

//chat gpt code
/* const register = async (req, res) => {
    const { email, name, password } = req.body;

    try {
        const emailAlreadyExists = await User.findOne({ email });
        if (emailAlreadyExists) {
            return res.status(400).json({ error: 'Email already exists' });
        }

        // Proceed with user registration if email is not already registered

        // Example:
        // const newUser = await User.create({ email, name, password });
        // res.status(201).json(newUser);
    } catch (error) {
        // Handle other errors
        console.error('Error during registration:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};
*/

const login = async(req, res) => {
    const {email,password} = req.body;

    if(!email || !password){
        throw new CustomError.BadRequestError('Please provide email and password')
    }
    const user = await User.findOne({ email })

    if(!user){
        throw new CustomError.UnauthenticatedError('Invalid credentials 1')
    }
    const isPasswordCorrect = await user.comparePassword(password)
    if(!isPasswordCorrect){
        throw new CustomError.UnauthenticatedError('Invalid credentials2')
    }
    const tokenUser = createTokenUser(user);
    attachCookiesToResponse({res,user: tokenUser})
    
   res.status(StatusCodes.CREATED).json({ tokenUser })
   
};


//chat gpt code
/* const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        throw new CustomError.BadRequestError('Please provide email and password');
    }

    const user = await User.findOne({ email });

    if (!user) {
        throw new CustomError.UnauthenticatedError('Invalid credentials');
    }

    const isPasswordCorrect = await user.comparePassword(password);

    if (!isPasswordCorrect) {
        throw new CustomError.UnauthenticatedError('Invalid credentials');
    }

    // Generate JWT token
    const token = generateAuthToken(user);

    // Send token in response
    res.status(StatusCodes.OK).json({ token });
};*/

/* const logout = async (req, res) => {
    res.cookie('token', 'logout', {
    httpOnly:true,
    expires:new Date(Date.now() + 5 * 1000),
});
res.status(StatusCodes.OK).json({msg: 'user logged out'});
}; */
const logout = async (req,res) => {
    res.cookie('token','logout', {
    httpOnly:true,
    expires: new Date(Date.now() + 5 * 1000)
    });
    res.status(StatusCodes.OK).json({msg:'user logged out!'})
};
module.exports = {
    register,
    login,
    logout,
}