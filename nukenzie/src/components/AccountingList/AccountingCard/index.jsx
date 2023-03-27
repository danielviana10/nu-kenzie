export const AccoutingCard = ({acc, removeAccoutingFromAccoutingList}) => {
    return(
        <div className="divCard">
            <li>
                <h3>{acc.title}</h3>
                <p>{acc.type}</p>
            </li>
            <li>
                <span>R$ {acc.money}</span>
                <button onClick={() => removeAccoutingFromAccoutingList(acc.id)}>Excluir</button>
            </li>
        </div>
    )
}