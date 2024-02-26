import {Request, Response} from 'express';

export const newUser = (req: Request, res: Response)=> { 

console.log(req.body);

res.json ({
    msg: 'New user',
    body: req.body
})

}

export const loginUser = (req: Request, res: Response)=> { 

    console.log(req.body);
    
    res.json ({
        msg: 'Login user',
        body: req.body
    })
    
    }