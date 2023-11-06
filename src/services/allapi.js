import { BASE_URL } from "./baseurl";
import { commonRequest } from "./commonreq";


  // add video 
  export  const addVideo=async(body)=>{
            
  return await commonRequest("POST",`${BASE_URL}/videos`,body)

  }

  // get video 

    export const  getVideo= async()=>{
    return   await  commonRequest("GET",`${BASE_URL}/videos`,"") 
     }

    //  Delete video

  export const  deleteVideo= async(id)=>{

    return  await commonRequest("DELETE",`${BASE_URL}/videos/${id}`,{})   

   }

  //  addCategory

  export  const addCategory=async(body)=>{
          
   return    await commonRequest("POST",`${BASE_URL}/categories`,body)
    }


    // get all category 

    export   const getallCategories=async()=>{
           return   await  commonRequest("GET",`${BASE_URL}/categories`,"")
       }

    // delete category 

     export       const deleteCategory=async(id)=>{
                 return   await   commonRequest("DELETE",`${BASE_URL}/categories/${id}`,{})  
            }
  

            // gethistory 

            export   const gethistory=async()=>{
              return   await  commonRequest("GET",`${BASE_URL}/watchhistory`,"")
          }

            // addhistory

            export  const addhistory=async(body)=>{
          
              return    await commonRequest("POST",`${BASE_URL}/watchhistory`,body)
               }

      // get single video 

      export const  getvideo= async(id)=>{
        return   await  commonRequest("GET",`${BASE_URL}/videos/${id}`,"") 
         }

        //  update category 
          export const updateCategory = async(id,body)=>{
            return await commonRequest("PUT",`${BASE_URL}/categories/${id}`,body)
          }