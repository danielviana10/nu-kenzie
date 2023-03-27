import { useState } from "react"

export const AccoutingCreateForm = ( { addAccoutingToAccoutingList } ) => {

    const [title, setTitle] = useState("")
    const [money, setMoney] = useState("")
    const [type, setType] = useState("Entrada")

    const submit = (event) => {
        event.preventDefault()
        const formData = {title, money, type}
        addAccoutingToAccoutingList(formData)
    }

    return(
        <div>
            <form onSubmit={submit} className="form">
                <label>Descrição</label>
                <input required type="text" value={title} placeholder="Digite aqui sua descrição" onChange={(event) => setTitle(event.target.value)}/>
                <span>Ex: Compra de roupas</span>

        
                <label>Valor (R$)</label>
                <input required type="text" value={money} placeholder="1" onChange={(event) => setMoney(event.target.value)}/>

                <label>Tipo de valor</label>
                <select required value={type} onChange={(event) => {
                    setType(event.target.value)
                    }} >
                    <option value="Entrada">Entrada</option>
                    <option value="Saída">Despesas</option>
                </select>

                <button type="submit">Insira o valor</button>
            </form>
        </div>
    )
    
}