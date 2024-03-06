import {Request, Response} from 'express';
import bcrypt from 'bcrypt';
import { User } from '../moddels/users';
import jwt from 'jsonwebtoken';

export const newUser = async (req: Request, res: Response)=> { 

const {username, password} =req.body;

//Validamos que ese usuario existe7
const user = await User.findOne({where: {username: username}});
if (user) {
   return res.status(400).json({
        msg: `Ya existe en un usuario con el nombre ${username}`
    })
}



const hashedpassword = await bcrypt.hash(password, 10 )

try {
  //guardar usuarios
await User.create({
    username: username,
    password:hashedpassword
    })
     res.json ({
        msg: `usuario ${username} creado exitosamente`,
         
 })  
} catch (error) {
    res.status(400).json ({
        msg:'Se genero un error',
        error
     })
}

}

export const loginUser = async (req: Request, res: Response)=> { 

    const {username, password } =req.body;

//validacion usuario
const user: any = await User.findOne({where: {username: username}});


if (!user) {
   return  res.status(400).json ( {
    msg: `no existe el usuario ${username} en la base de datos` 

   }

   )
    
}
//validamos password
    const passwordValid = await bcrypt.compare(password, user.password)
    if (!passwordValid) {

        return  res.status(400).json ( {
            msg: `contraseña incorrecta` 
        
           }
        
           )
    
    }
 //Generar token
const token = jwt.sign({
    username: username
}, process.env.SECRET_KEY || 'lio12',{
expiresIn: '10000'
});

res.json(token);
}