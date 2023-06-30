import React, {useState} from 'react'
import FriendsList from "./Components/FriendsList/FriendsList";
import Button from "./Utils/Button/Button";
import FormFriend from "./Components/FormFriend/FormFriend";
import FormSplitBill from "./Components/FormSplitBill/FormSplitBill";
import {initialFriends} from "./Utils/data";

const App = () => {

    const [showForm, setShowForm] = useState(false);
    const [addNewFriends, setAddNewFriends] = useState(initialFriends)
    const [selectFriend, setSelectFriend] = useState(null);
    const handlerShow = () => {
        setShowForm(prevShow => !prevShow);
    }
    const handlerAdd = (friend) => {
        setAddNewFriends(friends => [...friends, friend])
    }

    const handlerSplitBill = (value) => {
        setAddNewFriends((friends) =>
            friends.map((friend) =>
                friend.id === selectFriend.id ? {...friend, balance: friend.balance + value} : friend)
        )
        setSelectFriend(null)

    }


    const handlerSelection = (friendList) => {
        setSelectFriend((current) => current?.id === friendList.id ? null : friendList)
        setShowForm(false)
    }

    return (
        <div className="app">
            <div className="sidebar">
                <FriendsList addNewFriends={addNewFriends} onSelection={handlerSelection} selectFriend={selectFriend}/>
                {showForm && <FormFriend setAddNewFriends={handlerAdd} setShowForm={setShowForm}/>}
                <Button onClick={handlerShow}>{showForm ? "Close" : 'Add Friend'}</Button>
            </div>
            {selectFriend && <FormSplitBill selectFriend={selectFriend} onAddBill={handlerSplitBill}/>}
        </div>
    )
}

export default App
