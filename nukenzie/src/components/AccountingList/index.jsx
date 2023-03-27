import { AccoutingCard  } from "./AccountingCard"

export const AccoutingList = ( {accoutingList, removeAccoutingFromAccoutingList} ) => {
    return(
        <ul className="ulAcc">
            {accoutingList.map((accounting) => {
                return <AccoutingCard key={accounting.id} acc={accounting} removeAccoutingFromAccoutingList={removeAccoutingFromAccoutingList}/>
            })}
        </ul>
    )
}