import { AccoutingCard  } from "./AccountingCard"

export const AccoutingList = ( {accoutingList, removeAccoutingFromAccoutingList} ) => {
    
    return(
        
        <ul className="ulAcc">
            
            {accoutingList.length == 0 ? <h2>Você ainda não possui nenhum lançamento</h2> : accoutingList.map((accounting) => {
                return <AccoutingCard key={accounting.id} acc={accounting} removeAccoutingFromAccoutingList={removeAccoutingFromAccoutingList}/>
            })}
        </ul>
    )
}