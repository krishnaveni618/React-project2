import axios from "axios";

export const loginCalls = async (userCredential,dispatch) =>{
       dispatch({type:"Login_Start"});
       try{
      const res =  await axios.post("http://localhost:8000/api/auther/login",userCredential)
       dispatch({type:"Login_Success" , payload:res.data})
       }catch(err){
           dispatch({type:"Login_Failure" , payload:err})
       }
};