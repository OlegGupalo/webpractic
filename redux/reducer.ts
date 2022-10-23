import { combineReducers } from "redux";
import post from "./slices/post";
import shedule from "./slices/shedule";
import user from "./slices/user";

export default combineReducers({
    auth: user,
    shedule: shedule,
    post: post
})