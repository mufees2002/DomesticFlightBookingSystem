import axios from "axios";
//import { Component } from "react";
//import { useState } from "react";



axios.defaults.baseURL='http://127.0.0.1:8009/add'
 class Restapi{
    getinfo(){
        return  axios.get('Userinfo');
    }
    postinfo(data){
        return axios.post('register',data);
    }

}

export default Restapi