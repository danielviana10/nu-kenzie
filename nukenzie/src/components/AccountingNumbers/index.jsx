export const AccoutingNumbers = ({accoutingValor}) => {

    if(accoutingValor == 0){
        
    }

    return(
        <div className="divNumbers">
            <li> 
                <h2>Valor total</h2>
                <span>R$ {accoutingValor}</span>
            </li>
            <span>O valor se refere ao saldo</span>
        </div>
    )

}