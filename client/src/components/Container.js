import {useEffect} from 'react'
import ChatList from './ChatList'
import ChatForm from './ChatForm'
import {useChat} from '../context/ChatContext'

import {init, subscribeChat, subscribeInıtialMessages} from '../socketApi'

function Container() {
    const {setMessages} = useChat();

    useEffect(() => {
        init()
        subscribeInıtialMessages((messages) => {
            setMessages(messages)
        })
        subscribeChat((message)=> { // subscribeChat fonksiyonu çağrılıyor
          setMessages(prevState =>[...prevState,{message}]) // önceki mesajların devamı olarak yeni yazılan mesajları herkese gösteriyor
        })
    } , [])

  return (
    <div>
      <h1>Chat App</h1>
        <ChatList />
        <ChatForm />
    </div>
  )
}

export default Container