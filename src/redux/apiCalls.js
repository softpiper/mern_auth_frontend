import { publicRequest } from "../requestMethods";
import { loginFailure, loginStart, loginSuccess,logout } from "./userRedux"

export const login = async (dispatch, user)=>{
    dispatch(loginStart());
    try{
        const res = await publicRequest.post("/signin", user);
        console.log(res.data);
        dispatch(loginSuccess(res.data));
    }catch(err){
        dispatch(loginFailure());
    }
}

export const logoutCall = async (dispatch)=>{
    dispatch(logout());
}