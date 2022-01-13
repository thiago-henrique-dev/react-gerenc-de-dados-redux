import { createStore, combineReducers   } from 'redux'

import numerosReducer from './reducers/numerosReducers'

const reducers = combineReducers({
    numeros: numerosReducer,
   
})

function storeConfig(){
    return createStore(reducers)  
}
//FUNÇÃO VAI CRIAR O ESTADO DA APLICAÇÃO APARTIR  DOS MEUS REDUCERS

export default storeConfig