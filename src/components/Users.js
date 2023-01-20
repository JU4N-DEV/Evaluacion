import React from "react";
import './Users.css';

import { dataUS } from "../assets/datosuser";

import Usersconvert from './UsersConv';

function Users() {
    return(
        <>
         <Usersconvert dataUS={dataUS}></Usersconvert>
        </>
    )
}

export default Users;