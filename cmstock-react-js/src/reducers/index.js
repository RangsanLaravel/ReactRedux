import { combineReducers } from "redux";
import registerReducer from './register.reducer';
import loginReducer from './login.reducer';
import appReducer from './app.reducer';
import stockReducer from  './stock.reducer';
//เอามารวมเป็นอันเดียวกัน
export default combineReducers(
    {
        registerReducer,
        loginReducer,
        appReducer,
        stockReducer
    })