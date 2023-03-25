export const AccoutingCard = ({acc, removeAccoutingFromAccoutingList}) => {
    return(
        <div>
            <li>
                <h3>{acc.title}</h3>
                <p>{acc.money}</p>
            </li>
            <li>
                <span>{acc.type}</span>
                <button onClick={() => removeAccoutingFromAccoutingList(acc.id)}>Excluir</button>
            </li>
        </div>
    )
}