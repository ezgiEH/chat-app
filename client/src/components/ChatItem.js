import React from 'react'
import styles from './styles.module.css'

function ChatItem({item}) {

  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  
  return (
    <div className={ `${styles.chatItem} ${item.fromMe ? styles.right : ""} `}> 
       {item.message}
      <div className={styles.hour}>{hours}:{minutes}</div>
    </div>
  )
}

export default ChatItem