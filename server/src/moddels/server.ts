 import express, {Application} from 'express';
 import  routesproduct from '../routes/product';
 import  routesUser  from '../routes/user';
 
class Server {
    private app: Application;
    private port: string;
    
    constructor() {
    this.app = express();   
    //this.port= process.env.PORT || '3001';  
    this.port= '3001';
      

    this.listen(); 
    this.routes();
    } 
    
    listen() {    
 this.app.listen(this.port, ()=> {
    console.log('La aplicacion esta corriendo en el puerto' + this.port);
 })

}
routes() {
   this.app.use('/api/products',routesproduct);
   this.app.use('/api/users', routesUser);

}
  
 }

export default Server;