import { useState } from "react";
import Styles from "../styles/chatBot.module.css";



export default function ChatBot() {
  const [win, setWin] = useState(false)
  const bot = () => {
    setWin(!win)
  }
  return (
    <div className={Styles.container}>
      <div className={
        win
          ?
          Styles.container_chatBot
          :
          Styles.container_chatBot_closed}
      >
        <button
          onClick={bot}
        >
          x
        </button>

        <div>
          <h4>Asistente</h4>
          <input type="text" placeholder=""/>
          <button className={Styles.send}>{'>'}</button>
        </div>


      </div>
    </div>
  );
}
