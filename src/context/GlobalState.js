import React ,{createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

//Initial State 
// R 讀取
const InitialState = {
    users:[]
}

//Create Context 
export const GlobalContext = createContext(InitialState);

//Provider Component 供應商組件
export const GlobalProvider =({children}) =>{
    const[ state, dispatch ] = useReducer(AppReducer,InitialState);

    //Actions 動作
    //C 新增
    const addUser = (user) => {
        dispatch({
            type:'ADD_USER',
            payload: user
        })
    }
    //U 修改
    const editUser = (user) => {
        dispatch({
            type:'EDIT_USER',
            payload: user
        })
    }

    //Ｄ 刪除
     const removeUser =(id) => {
        dispatch({
            type:'REMOVE_USER',
            payload: id
        })
     }

    return (
        <GlobalContext.Provider value={{
            users:state.users,
            addUser,
            editUser,
            removeUser
        }}>
            {children}
        </GlobalContext.Provider>
    )

}