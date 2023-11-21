import Users from '../schemas/user.js'
import JWT from '../utils/jwt.js';


export class UserContr{
    constructor(){}
    static async register(req, res){
       try {
        const {username} = req.body;
        const checkIsExistsUsername = await Users.findOne({username});
        if(checkIsExistsUsername != null){
          throw new Error(`This username already exists!`)
        }else{
             const newUser = await Users.create({username});
             res.send({
                status : 201,
                message : `Successfuly created an account`,
                success : true,
                data : newUser,
                token : JWT.SIGN(newUser._id)
             })
        }
       } catch (error) {
        res.send({
            status : 400,
            message : error.message,
            success : false
        })
       }
    }

    static async login(req, res){
        try {
            const {username} = req.body;
            const checkWithUname = await Users.findOne({username});
            if(checkWithUname == null){
                throw new Error(`Not found user`)
            }else{
              res.send({
                status : 200,
                message : `Successfuly loginned`,
                success : true,
                data : checkWithUname,
                token : JWT.SIGN(checkWithUname._id)
              })
            }
        } catch (error) {
            res.send({
                status : 400,
                message : error.message,
                success : false
            })
        }
    }

}


