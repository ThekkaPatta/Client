import '../../assets/css/Messenger/Message.css'
import { format } from 'timeago.js'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Message({ message, own, currentChat }) {

    const [user, setUser] = useState(null)
    const [self, setSelf] = useState(null)

    var u_id = localStorage.getItem('_id');

    useEffect(() => {
        const getUser = async () => {
            const res = await axios.get("https://thekkapatta.herokuapp.com/user/single/" + u_id)
            if (res.data !== null) {
                try {
                    setSelf(res.data)
                }
                catch (err) {
                    console.log(err)
                }
            }
            else {
                const res = await axios.get("https://thekkapatta.herokuapp.com/worker/single/" + u_id)
                try {
                    setSelf(res.data)
                }
                catch (err) {
                    console.log(err)
                }

            }


            const friendId = currentChat.members.find((m) => m !== u_id)
            try {
                const res = await axios("https://thekkapatta.herokuapp.com/worker/single/" + friendId)
                if (res.data !== null) {
                    try {
                        setUser(res.data)

                    }
                    catch (err) {
                        console.log(err)
                    }
                }
                else {
                    try {
                        const res = await axios("https://thekkapatta.herokuapp.com/user/single/" + friendId)
                        setUser(res.data)

                    }
                    catch (err) {
                        console.log(err)
                    }

                }
            }
            catch (err) {
                console.log(err)
            }
        }

        getUser()
    }, [currentChat])


    return (
            <div className={own ? "message own" : "message"}>
                <div className='messageTop'>
                    <img className='messageImg' src={own ? "https://thekkapatta.herokuapp.com/" + self?.ProfileImg : "https://thekkapatta.herokuapp.com/" + user?.ProfileImg} alt=''></img>
                    <p className='messageText'> {message.text}</p>
                </div>
                <div className='messageBottom'>{format(message.createdAt)}</div>
            </div>
    )
}