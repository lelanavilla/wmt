import axios from 'axios';
// import{addSavedItems, editSavedItems, savedItems } from './savedItemsRedux.js';

const profileAxios = axios.create();
profileAxios.interceptors.request.use(config =>{
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bear ${token}`;
    return config;
})

const initialState = {
    loading:true,
    username: "",
    isAdmin: false,
    isAuthenticated:false,
    authErrCode: {
        signup:"",
        login: ""
    },
    userData:{},
    errMsg:"",
}

 const usersReducer = (state = initialState, action) =>{
    switch (action.type) {
        case "AUTHENTICATE_BEGIN":
        return {
            ...state, 
            loading:true
        }
        case "AUTHENTICATE":
        return {
            ...state,
            isAutheticated: true,
            loading: false,
            authErrCode: {
                signup:"",
                login: ""
            },
            userData: action.user
        }
        case "ADD_SAVED_ITEM":
        return {
            ...state,
            loading:false,
            userData: {
                ...state.userData,
                savedItems: [...state.userData.savedItems, action.newSavedItem]
            }
        }
        case "EDIT_SAVED_ITEM":
            return{
                ...state, 
                userData:{
                    ...state.userData,
                    savedItems: state.userData.savedItems.map(savedItem =>{
                        if(savedItem._id === action.id){
                            return action.editedSavedItem
                        }else{
                            return savedItem;
                        }
                    })
                }
            }
            case "LOGOUT":
            return{
                ...initialState,
                loading: false,
            }
            case "AUTH_ERROR":
            return{
                ...state,
                loading: false,
                authErrCode: {
                    ...state.authErrCode,
                    [action.key]: action.errCode
                }
            }
            case "EDIT_USER":
            return{
                ...state,
                loading: false,
                userData: state.userData.map(user => {
                    if (user._id === action.id){
                        return action.editedUser
                    }else{
                        return user
                    }

                })
                
            }
            case "DELETE_USER":
                return{
                    ...state,
                    loading:false,
                    userData: state.userData.filter(user => user._id !== action.id)

                }
                default:return state;
    }
}
    function authenticate(user){
        return {
            type:"AUTHENTICATE",
            user
        }
    }

   export const authError = (key, errCode) =>{
        return {
            type: "AUTH_ERROR",
            key,
            errCode
        }
    }
   
    export function verify() {
        return dispatch => {
            profileAxios.get("/api/users/verify")
            .then(response => {
                dispatch(authenticate(response.data));
            })
            .catch(err => dispatch({
                type: "AUTH_ERROR",
                errCode:"verify",
                err
            }))
        }
    }
 export const signup = (userInfo) =>{
        return dispatch =>{
            dispatch({
                type: 'AUTHENTICATE_BEGIN'
            })
            axios.post('/auth/signup', userInfo)
            .then(response => {
                const {token, user} = response.data;
                localStorage.setItem("token, token");
                localStorage.setItem("user", JSON.stringify(user));
                dispatch(authenticate(user));
            })
            .catch(err => {
                dispatch(authError("signup", err));
            })
        }
    }
     export const login = credentials => {
        return dispatch=> {
            axios.post("/auth/login", credentials)
            .then(response =>{
                const {token, user} = response.data;
                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(user));
                dispatch(authenticate(user));
            })
            .catch(err => {
                dispatch(authError("login", err.response.status))

            })
        }
    }
    export const logout = () =>{
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        return{
            type:"LOGOUT"
        }
    }
    //GET ONE USER
   export const getUser = id =>{
        console.log("i got to getUser")
        return dispatch => {
            axios.get('/api/users/' + id)
            .then(response => {
                const {token, user} = response.data;
                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(user));
                dispatch({
                    type:"GET_USER",
                    user:response.data
                })``
            })
        }
    }
    //EDITING USER
    export const editUser = (editedUser,id) =>{
        return dispatch =>{
            axios.put("/users/" +id, editedUser)
            .then(response =>{
                dispatch({
                    type:"EDIT_USER",
                    editedUser: response.data,
                })
            })
        }
    }
    //DELETE USER
  export const deleteUser = id =>{
        return dispatch => {
            axios.delete("/users/" + id)
            .then(response =>{
                dispatch(logout())
            })
        }
    }

export default usersReducer;