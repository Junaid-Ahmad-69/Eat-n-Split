import React, {useState} from 'react'
import Button from "../../Utils/Button/Button";


const FormSplitBill = ({selectFriend, onAddBill}) => {
    const [bill, setBill] = useState('');
    const [paidByUser, setPaidByUser] = useState('');
    const totalValue = bill ? bill - paidByUser : '';
    const [whoIsPaid, setWhoIsPaid] = useState('user');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!bill || !paidByUser) return;
        onAddBill(whoIsPaid === "user" ? totalValue : -paidByUser)
    }

    return (
        <form className="form-split-bill" onSubmit={handleSubmit}>
            <h2>Split a bill with {selectFriend.name}</h2>

            <label>💰 Bill Value</label>
            <input type="text" value={bill} onChange={(e) => setBill(Number(e.target.value))}/>

            <label>🧍 Your expense</label>
            <input type="text" value={paidByUser}
                   onChange={(e) => setPaidByUser(Number(e.target.value) > bill ? paidByUser : Number(e.target.value))}/>

            <label>👬 {selectFriend.name}'s Expense</label>
            <input type="text" disabled={true} value={totalValue}/>

            <label>🤑 Who is paying the bill?</label>
            <select value={whoIsPaid} onChange={(e) => setWhoIsPaid(e.target.value)}>
                <option value="user">You</option>
                <option value="friend">{selectFriend.name}   </option>
            </select>

            <Button>Split Bill</Button>
        </form>
    )
}

export default FormSplitBill
