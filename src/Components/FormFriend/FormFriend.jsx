import React, {useState} from 'react'
import Button from '../../Utils/Button/Button'

const FormFriend = ({setAddNewFriends,setShowForm}) => {
    const [name, setName] = useState('')
    const [image, setImage] = useState("https://i.pravatar.cc/48")
    const handlerSubmit = (e) => {
        e.preventDefault()

        if (!name || !image) return;
        const id = crypto.randomUUID();
        const newFriend = {
            id,
            name,
            image: `${image}?=${id}`,
            balance: 0,
        }
        setAddNewFriends(newFriend);
        setShowForm(false)

        setName("")
        setImage("https://i.pravatar.cc/48")
    }
    return (
        <form className="form-add-friend" onSubmit={handlerSubmit}>
            <label>👯 Friend name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>

            <label>🖼 Image url</label>
            <input type="text" value={image} onChange={(e) => setImage(e.target.value)}/>
            <Button>Add</Button>
        </form>
    )
}

export default FormFriend
