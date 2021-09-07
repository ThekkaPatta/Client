import axios from 'axios'
import { useRef } from 'react'
import { useEffect, useState } from 'react'
import '../../assets/css/Messenger/Messenger.css'
import Conversations from './Conversations.js'
import Message from './Message.js'
import {io} from "socket.io-client"

export default function Messenger() {
    const [conversations, setConversation] = useState([]);
    const [currentChat, setcurrentChat] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newmessages, setNewMessages] = useState("");
    const [arrivalMessage,setarrivalMessage]= useState(null);
    const socket = useRef();
    const scrollRef = useRef();

    var u_id = localStorage.getItem('_id');

    useEffect(()=>{
        socket.current= io("ws://localhost:8900")
        socket.current.on('getMessage',data=>{
            setarrivalMessage({
                sender:data.senderId,
                text:data.text,
                createdAt:Date.now(),
            })
        }
    )
    },[])

    useEffect(()=>{
        arrivalMessage && currentChat?.members.includes(arrivalMessage.sender) &&
        setMessages((prev)=> [...prev,arrivalMessage]);

    },[arrivalMessage,currentChat])

    useEffect(()=>{
        socket.current.emit('addUser',u_id)
        socket.current.on('getUsers',users=>{
            console.log(users)
        })
    },[u_id])

    useEffect(() => {
        const getConversations = async () => {
            try {
                const res = await axios.get("http://localhost:550/conversation/" + u_id)
                setConversation(res.data);
            }
            catch (err) {
                console.log(err)
            }
        }
        getConversations();
    }, [u_id])


    useEffect(() => {
        const getMessages = async () => {
            try {
                const res = await axios.get("http://localhost:550/messages/" + currentChat?._id)
                setMessages(res.data)
            }
            catch (err) {
                console.log(err)
            }

        }
        getMessages()
    }, [currentChat])


    const handleSubmit = async (e) => {
        e.preventDefault()
        if(newmessages!==''){
            const message = {
                sender: u_id,
                text: newmessages,
                conversationId: currentChat._id,
            }
    
            const receiverId = currentChat.members.find((member)=> member !== u_id)
            socket.current.emit('sendMessage',{
                senderId:u_id,
                receiverId,
                text:newmessages,
            })

        
        try {
            const res = await axios.post('http://localhost:550/messages', message)
            setMessages([...messages, res.data])
            setNewMessages('')
        }
        catch (err) {
            console.log(err)
        }
        
    }
        
    }

    useEffect(()=>{
    
    })

    useEffect(()=>{
        scrollRef.current?.scrollIntoView({behavior:"smooth"})
    },[messages])


    return (
        <div className="messenger">
            <br></br> <br></br> <br></br>
            <div className="chatMenu">
                <div className='chatMenuWrapper'>
                    {conversations.map((c) => (
                        <div onClick={() => { setcurrentChat(c) }}>
                            <Conversations conversations={c} currentUser={u_id} />
                        </div>

                    ))}


                </div>
            </div>
            <div className="chatBox">
                <div className='chatBoxWrapper'>
                    {
                        currentChat ?
                            (
                                <div className='chat'>
                                    <div className='chatBoxTop'>
                                        {messages.map((m) => (
                                            <div ref={scrollRef}>
                                                <Message message={m} own={m.sender === u_id} currentChat={currentChat} />
                                            </div>
                                        ))}


                                    </div>
                                    <div className='chatBoxBottom'>
                                        <textarea className='chatMessageInput'
                                            placeholder='Write a message'
                                            onChange={(e) => setNewMessages(e.target.value)}
                                            value={newmessages}
                                        ></textarea>
                                        <button className='chatSubmitButton' onClick={handleSubmit}>Send</button>
                                    </div>
                                </div>) : (<span className='noConvotext'> Open a Conversation to start a Chat</span>
                            )
                    }
                </div>
            </div>
            <div className="chatOnline">
                <div className='chatOnlineWrapper'>
                </div>
            </div>
        </div >

    )
}
