import Item from "../../Components/FriendsList/Item/Item"

const FriendsList = ({addNewFriends, onSelection,selectFriend}) => {
    return (
        <ul>
            {addNewFriends.map(friendList => {
                return <Item key={friendList.id} friendList={friendList} onSelection={onSelection} selectFriend={selectFriend}/>
            })}
        </ul>
    )
}

export default FriendsList
