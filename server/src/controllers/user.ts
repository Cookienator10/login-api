import {Request, Response} from 'express';
import bcrypt from 'bcrypt';
import { User } from '../moddels/users';
export const newUser = async (req: Request, res: Response)=> { 

const {username, password} =req.body;

const hashedpassword = await bcrypt.hash(password, 10 )

await User.create({
username: username,
password:hashedpassword
})
res.json ({
    msg: `usuario ${username} creado exitosamente`,
     
})

}

export const loginUser = (req: Request, res: Response)=> { 

    const {body} =req;

    res.json ({
        msg: 'Login user',
        body
    })
    
    }