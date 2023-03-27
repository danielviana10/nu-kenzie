export const AccoutingCard = ({acc, removeAccoutingFromAccoutingList}) => {
    const valueCard = acc.money
    return(
        <div className={acc.type == "Entrada" ? "divCard" : "divCardGrey"}>
            <li>
                <h3>{acc.title}</h3>
                <p>{acc.type}</p>
            </li>
            <li>
                <span>R$ {valueCard}</span>
                <button onClick={() => removeAccoutingFromAccoutingList(acc.id)}>Excluir</button>
            </li>
        </div>
    )
}