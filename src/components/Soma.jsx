import React from 'react'
import Card from './Card'

const Soma = props => {
    const { min, max } = props 
    const aleatorio = parseInt(Math.random() * (max - min)) + min
    
    return (
        <Card title="Soma dos números" blue>
            <div>
                <span>
                    <span>Resultado: </span>
                  <strong>{aleatorio}</strong>
             </span>
       
            </div>

            
        </Card>
    )
}

export default Soma