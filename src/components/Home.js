import React from "react";
import Usersp from './Users';
import './Home.css';
import TimeSelect from './Time';
import Productos from "./Productos";
import Boton from './Boton';

const Home = () => {
    return(
        <div>
            <div className="bienvenida"><h1>Hola Bienvenido!</h1></div>
            
             <Usersp/>
             <TimeSelect/>
             <Productos/>
             <div className="button1">
              <Boton/>
             </div>
        </div>
    )
}

export default Home;