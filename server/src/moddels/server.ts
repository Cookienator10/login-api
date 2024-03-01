import express, { Application } from 'express';
import routesProduct from './product';
import routesUser from '../routes/user';
import { Product } from '../product';
import sequelize from '../db/connection';
import { User } from '../moddels/users';

class Server {
    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3001';
        // this.port = '3001'; // No necesitas esta línea si estás utilizando process.env.PORT
        this.listen();
        this.middlewares();
        this.routes();
        this.dbConnect(); 
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('La aplicación está corriendo en el puerto ' + this.port);
        });
    }

    routes() {
        this.app.use('/api/products', routesProduct);
        this.app.use('/api/users', routesUser);
    }

    middlewares() {
        this.app.use(express.json());
    }

    async dbConnect() {
        try {
        
            await Product.sync(); 
            await User.sync();
        } catch (error) {
            console.error('Error al sincronizar modelos con la base de datos:', error);
        }
    }
}

export default Server;
