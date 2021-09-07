import axios from 'axios'
import { useEffect, useState } from 'react'
import '../../assets/css/Messenger/Conversations.css'

export default function Conversations({ conversations, currentUser }) {
    const [user, setUser] = useState(null)
    const [usertype, setUserType] = useState()

    useEffect(() => {

        const friendId = conversations.members.find((m) => m !== currentUser)

        const getUser = async () => {
            try {
                const res = await axios("https://thekkapatta.herokuapp.com/worker/single/" + friendId)
                if (res.data !== null) {
                    try {
                        setUser(res.data)
                        setUserType("Worker")

                    }
                    catch (err) {
                        console.log(err)
                    }
                }
                else {
                    const res = await axios("https://thekkapatta.herokuapp.com/user/single/" + friendId)
                    setUser(res.data)
                    setUserType("User")
                }



            }

            catch (err) {
                console.log(err)
            }

        }
        getUser()
    }, [currentUser, conversations])

    return (
        <div className='conversation'>
            {(() => {
                if (usertype === "User") {
                    return (
                        <>
                            <img className='conversationImg' src={"https://thekkapatta.herokuapp.com/" + user.ProfileImg} alt='' />
                            <span className='conversationName'>{user.UUsername}</span>
                        </>
                    )
                }


                else if (usertype === 'Worker') {
                    return (
                        <>
                            <img className='conversationImg' src={ "https://thekkapatta.herokuapp.com/" + user.ProfileImg} alt='' />
                            <span className='conversationName'>{user.WUsername}</span>
                        </>
                    )

                }
            })
            ()}
        </div>
    )
}