import { AccoutingCard  } from "./AccountingCard"

export const AccoutingList = ( {accoutingList, removeAccoutingFromAccoutingList} ) => {
    return(
        <ul>
            {accoutingList.map((accounting) => {
                return <AccoutingCard key={accounting.id} acc={accounting} removeAccoutingFromAccoutingList={removeAccoutingFromAccoutingList}/>
            })}
        </ul>
    )
}