import JWT from "../utils/jwt.js";
import Users from '../schemas/user.js'


export const checkToken = async (req, res, next) => {
  try {
    const {token} = req.headers;
    if(!token){
        throw new Error(`You must send token!`)
    }
    const {id} = JWT.VERIFY(token);
    const checkIsExists = await Users.findById(id);
    if(checkIsExists == null){
       throw new Error(`User not found`)
    }else{
        next()
    }
  } catch (error) {
    res.send({
      status: 400,
      message: error.message,
      success: false,
    });
  }
};
