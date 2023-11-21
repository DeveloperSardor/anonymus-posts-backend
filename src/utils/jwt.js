import jsonwebtoken from 'jsonwebtoken';
import dotenv from 'dotenv'
dotenv.config()

const JWT_SECRET = process.env.JWT_SECRET;

const JWT = {
SIGN(payload){
    return jsonwebtoken.sign({id : payload}, JWT_SECRET)
},
VERIFY(token){
    return jsonwebtoken.verify({id : payload}, JWT_SECRET)
}
}


export default JWT;