import React from 'react';
import './Chat.css';

const Chat = () => {
  return (
    <div>
          <main>
        <header>
          <div class="user-count">0</div>
          <h1>Chat</h1>
        </header>

        <section class="chat">
          <p><strong>Pepito</strong>: HELLOOO!</p>
          <p><strong>親日</strong>: こんいちは！</p>
        </section>

        <form>
          <input type="text" placeholder="Say something nice" />
          <button>Send</button>
        </form>
      </main>
    </div>

  )
}

export default Chat;
