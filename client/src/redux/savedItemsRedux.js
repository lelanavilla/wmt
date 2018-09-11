import axios from 'axios';

const savedItemsAxios =  axios.create();
savedItemsAxios.interceptors.request.use(config =>{
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})
const initialState ={
    savedItemsData: [],
    loading:true,
    errMsg: ""
}
this.state = this.initialState;

const savedItemsReducer =(state = initialState, action) => {
    switch (action.type){
        case "GET_SAVED_ITEMS":
        return{
            ...state,
            loading:false,
            savedItemsData: action.oneSavedItems
            //one???
        }
case "DELETE_SAVED_ITEMS":
return{
    ...state,
    errMsgloading:false,
    savedItems: state.savedItemsData.filter(savedItem => savedItem._id !== action.id)
}
default:
return state
    }
}
export const getSavedItems = () => {
    return  dispatch =>{
        savedItemsAxios.get('/api/savedItems')
        .then(response =>{
            dispatch({
                type: "GET_SAVED_ITEMS",
                savedItemsData: response.data
            })
        })
        .catch(err =>{
            dispatch({
                type: "ERR_MSG",
                errMsg:"Sorry no data is available"
            })
        })
    }
}
export const getSavedItem = id =>{
    return dispatch =>{
        savedItemsAxios.get("/api/savedItems/" + id)
        .then(response =>{
            console.log(response.data);
            dispatch({
                type: "GET_SAVED_ITEM",
                oneSavedItem : response.data
                //One?
            })
        })
        .catch(err =>{
            dispatch({
                type: "ERR_MSG",
                errMsg:"Sorry no data is available"
            })
        })
    }
}

//ADD A NEW SavedItem AND ATTACH A USERID TO IT
export const addSavedItems = (newSavedItem, history)=>{
    return dispatch=>{
        savedItemsAxios.post("/api/savedItems", newSavedItem)
        .then(response =>{
            console.log(response.data);
            dispatch({
                type: "ADD_SAVED_ITEM",
                newSavedItem: response.data,
            })
            history.push('/accountwall/' + response.data._id)
        })
        .catch(err =>{
            dispatch({
                type: "ERR_MSG",
                errMsg:"Sorry no data is available"
            })
        })
    }
}
//EDIT SavedItem
export const editSavedItems = (editedSavedItem, id, history)=>{
    return dispatch =>{
        savedItemsAxios.put("/api/savedItems/" + id, editedSavedItem)
        .then(response =>{
            dispatch({
                type: "EDIT_SAVED_ITEM",
                editedSavedItem :response.data,
                id
            })
            history.push("/accountwall/" + response.data._id)

        })
        .catch(err =>{
            dispatch({
            type: "ERR_MSG",
            errMsg:"Sorry no data is available"
        })
    })
    }
}
//DELETE savedItem
export const deleteSavedItem = id =>{
    return dispatch =>{
        savedItemsAxios.delete("/api/savedItems/" + id)
        .then(response =>{
            dispatch({
                type: "DELETE_IIEM",
                //ISSUE instead of item?
                id
            })
        })
        .catch(err =>{
            dispatch({
                type: "ERR_MSG",
                errMsg: "Sorry no data is available"
            })
        })
    }
}

export default savedItemsReducer;