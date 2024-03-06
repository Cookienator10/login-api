import {Request,Response, NextFunction  } from 'express';
import  jwt  from 'jsonwebtoken';
const validateToken = (req: Request, res: Response, next: NextFunction) =>{
const headertToken = req.headers['authorization']


if (headertToken != undefined && headertToken.startsWith('Bearer ')) {
    //Tiene token
  try {
    const bearertoken = headertToken.slice(7);
    console.log(headertToken);

 jwt.verify(bearertoken, process.env.SECRET_KEY || 'lio12')
 
    next()

  } catch (error) {
    res.status(401).json ({
        msg: `Token no valido`
    })
  } 
   
   
 
} else {
    res.status(401).json ({
        msg: 'El acceso esta denegado'
    })
}

}

export default validateToken;