import { createStore, combineReducers   } from 'redux'

const reducers = combineReducers({
    numeros: function(state, action){
        console.log('Reducer Numeros...')
        console.log(state, ' ', action)
        return {
            min: 7,
            max: 31
        }
    },
    nomes: function(state, action){
        console.log('Reducer Numeros...')
        return [
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