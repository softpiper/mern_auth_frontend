import { publicRequest } from "../requestMethods";
import { loginFailure, loginStart, loginSuccess,logout } from "./userRedux"
// export let toastMsg;

export const login = async (dispatch, user)=>{
    dispatch(loginStart());
    try{
        const res = await publicRequest.post("/signin", user);
        console.log(res.data);
        dispatch(loginSuccess(res.data));
    }catch(err){
        dispatch(loginFailure(err.response.data.error));
        console.log(err.response.data.error);
        // toastMsg = err.response.data.error;
        // console.log('toastMsg',toastMsg);
    }
}

export const loginWithGoogle = async (dispatch, token)=>{
    dispatch(loginStart());
    try{
        const res = await publicRequest.post("/google-login", token);
        console.log(res.data);
        dispatch(loginSuccess(res.data));
    }catch(err){
        dispatch(loginFailure());
        console.log(err);
    }
}

export const logoutCall = async (dispatch)=>{
    dispatch(logout());
}

