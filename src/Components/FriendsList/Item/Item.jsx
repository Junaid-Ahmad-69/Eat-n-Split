import Button from "../../../Utils/Button/Button"

const Item = ({friendList, onSelection, selectFriend}) => {
    const friend = selectFriend?.id === friendList.id;
    return (
        <li className={friend ? "selected" : ''}>
            <img src={friendList.image} alt={friendList.name}/>
            <h3>{friendList.name}</h3>

            {friendList.balance < 0 &&
                <p className="red">
                    You own {friendList.name} ${Math.abs(friendList.balance)}
                </p>
            }
            {friendList.balance > 0 &&
                <p className="green">
                    {friendList.name} own you ${Math.abs(friendList.balance)}
                </p>
            }{friendList.balance === 0 &&
            <p>
                You and {friendList.name} are even
            </p>
        }
            <Button onClick={() => onSelection(friendList)}>{friend ? "Close" : "Select "}</Button>

        </li>
    )
}

export default Item
