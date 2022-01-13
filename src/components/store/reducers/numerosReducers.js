import {
    NUM_MIN_ALTERADO,
    NUM_MAX_ALTERADO
} from '../actions/actionType'


const initialState = {
    min: 7,
    max:31
}
// CASO O ESTADO SEJA INDEFINIDO, NÃO TENHA SIDO PASSADO UM ESTADO VALIDO, ELE VAI PEGAR O ESTADO INICIAL   
function ac(state = initialState, action){
        
    switch(action.type){
        case NUM_MIN_ALTERADO:
            return {
                ...state,
                min: action.payload
                
                //CASO NAO SEJA ESSA AÇÃO ELE VAI RETORNAR O OBJETO DEBAIXO QUE É O VALOR PADRAO
            }
        case NUM_MAX_ALTERADO:
            return {
                ...state,
                max: action.payload
            }
            default:
                return state
                //CASO ELE NAO CAIA EM NENHUM DESSES CASES, OU SEJA, ACONTECEU UM OUTRO EVENTO, EU TENHO QUE VOLTAR AO ESTADO ATUAL
    }
}

export default ac