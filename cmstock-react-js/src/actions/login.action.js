import { HTTP_LOGIN_FETCHING, HTTP_LOGIN_SUCCESS, HTTP_LOGIN_FAILED,server,OK, YES } from "../constants";
import { httpClient } from './../utils/HttpClient';

export const setLoginStateToFetching = () => ({
    type: HTTP_LOGIN_FETCHING,
})

export const setLoginStateToSuccess = (payload) => ({
    type: HTTP_LOGIN_SUCCESS,
    payload
})

export const setLoginStateToFailed = () => ({
    type: HTTP_LOGIN_FAILED,
})

export const autologin =(history)=>{
    return ()=>{
        if(localStorage.getItem(server.LOGIN_PASSED)=="YES"){
            setTimeout(()=>history.push("/stock"),100);
        }
    }
}

export const login = (history,credential)=>{
    return async (dispatch,getState)=>{
        dispatch(setLoginStateToFetching())
        try{
            let result =await httpClient.post(server.LOGIN_URL,credential)
            if(result.data.result ==OK){
                //success
                localStorage.setItem(server.LOGIN_PASSED,YES);
                getState().appReducer.app.forceUpdate();
                history.push("/stock");
                dispatch(setLoginStateToSuccess(result.data.result))               
            }else{
                //failed
                dispatch(setLoginStateToFailed())
            }
        }
        catch{
            dispatch(setLoginStateToFailed())
        }
    }
}
