import {createStore,combineReducers,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import userReducer from "@/store/reducers/user/user"
import chatReducer from "@/store/reducers/chat/chat"
const reducer=combineReducers({
user:userReducer,
chat:chatReducer
})
const store=createStore(reducer,applyMiddleware(thunk))
export default store