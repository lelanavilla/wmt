 import {createStore, applyMiddleware, combineReducers} from 'redux';
 import thunk from 'redux-thunk';

 import usersReducer from './usersRedux';
 import savedItemsReducer from  './savedItemsRedux';
// import profitMarginsReducer from './profitMarginsRedux';
 const store = createStore(
     combineReducers({
         users:usersReducer,
         savedItems: savedItemsReducer,
        //  profitMargins: profitMarginsReducer
     }),
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
     applyMiddleware(thunk));

     store.subscribe(()=> console.log(store.getState()));
 
     export default store;