import {Request, Response   } from 'express';
import { Product } from '../product';

export const getProducts = async (req: Request, res: Response) => {
 
    const listProducts = await Product.findAll();
    res.json(listProducts)
}