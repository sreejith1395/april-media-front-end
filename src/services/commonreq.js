

import axios from "axios";


// create a common function 

export const commonRequest=async (method,url,body)=>{

//    request configurations 

        let reqConfig={
            method,
            // get post put delete
            url,
            // http://localhost:4000/
           data:body,

            headers:{
                "content-type":"application/json"
            }


        }


        // create axios instance 

        // api call

        return await axios(reqConfig).then((response)=>{
            return response
        }).catch((err)=>{
            return err
        })

}