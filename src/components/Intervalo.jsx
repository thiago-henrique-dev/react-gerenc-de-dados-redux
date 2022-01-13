import './Intervalo.css'
import React from 'react'
import Card from './Card'
import { connect } from 'react-redux'
import { alterarNumeroMinimo } from './store/actions/numeros'

function Intervalo(props) {

    const { min, max } = props
    props.alterarMinimo(10000)

    return (
        <Card title='Intervalo de Numeros' red>
            <div className="Intervalo">
                <span>
                    <strong>Mínimo:</strong>
                    <input type="number" value={min}  />
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input type="number" value={max} readOnly />
                </span>
            </div>
        </Card>
    )
}

function mapStateToProps(state) {
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}

function mapActionsCreatorsToProp(dispatch) {
    return {
        alterarMinimo(novoNumero) {
            const action = alterarNumeroMinimo(novoNumero)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapActionsCreatorsToProp)(Intervalo)