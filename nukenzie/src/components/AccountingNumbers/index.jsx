export const AccoutingNumbers = ({accoutingValor}) => {
    return(
        <div>
            <li> 
                <span>Valor total</span>
                <span>{accoutingValor}</span>
            </li>
            <span>O valor se refere ao saldo</span>
        </div>
    )
}