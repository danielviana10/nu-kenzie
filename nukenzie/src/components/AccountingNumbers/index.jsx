export const AccoutingNumbers = ({accoutingValor}) => {

    return(
        <div className="divNumbers">
            <li> 
                <h2>Valor total</h2>
                <span>R$ {accoutingValor.toFixed(2)}</span>
            </li>
            <span>O valor se refere ao saldo</span>
        </div>
    )
}