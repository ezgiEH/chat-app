import React from 'react'
import styles from "./styles.module.css"
import {useChat} from '../context/ChatContext'
import ChatItem from './ChatItem';
import ScrollabelFeed from 'react-scrollable-feed';

function ChatList() {
  const {messages} = useChat();
  
  
    return (
    <div className={styles.chatlist}>
        <ScrollabelFeed>
        {
           messages.map((item,key) => (<ChatItem key= {key} item ={item} />))   
        }
        </ScrollabelFeed>
    </div>
  )
}

export default ChatList