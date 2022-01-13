import { createStore, combineReducers   } from 'redux'

const reducers = combineReducers({
    numeros: function(state, action){
        
        switch(action.type){
            case 'NUM_MIN_ALTERADO':
                return {
                    ...state,
                    min: action.payload
                    
                    //CASO NAO SEJA ESSA AÇÃO ELE VAI RETORNAR O OBJETO DEBAIXO QUE É O VALOR PADRAO
                }
            case 'NUM_MAX_ALTERADO':
                return {
                    ...state,
                    max: action.payload
                }
                default:
                    return {
                        min: 7,
                        max: 31
              }
        }
    },
    nomes: function(state, action){
        console.log(state, ' ', action);        return [
            'Ana',
            'Bia',
            'Carlos'
        ]
    }
})

function storeConfig(){
    return createStore(reducers)  
}
//FUNÇÃO VAI CRIAR O ESTADO DA APLICAÇÃO APARTIR  DOS MEUS REDUCERS

export default storeConfig