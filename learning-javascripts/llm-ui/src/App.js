import React from 'react';
import './App.css';
import userIcon from './assets/user.svg'
import aiIcon from './assets/ai_chatbot.svg'
import sendIcon from './assets/send_button.svg'

// import { chatOpenAI } from './server/openai';

function App() {
  // const [input, setInput] = useState("");
  // const [messages, setMessages] = useState([
  //     {
  //     text: "Hi, I am ChatGPT",
  //     isBot: true
  //     }
  //   ]);

  // const handleSend = async () => {
  //   const res = await chatOpenAI(input);
  //   setMessages([
  //     ...messages,
  //     { text: input, isBot: false },
  //     { text: res, isBot: true } 
  //   ])
  // }


  return (
    <body>
      <div class="flex">
        <div class="sidebar">
          <img src="" alt="" class="userIcon" />This is Sidebar
        </div>
        <div className = 'main'>
          <div className = "chatBox">
            <div class="chats">
              <div class="chat">
                <img className = 'chatIMG' src={userIcon} alt="This is Me"/><p class="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore numquam totam illum enim sunt eligendi rem, minima adipisci aspernatur corporis perferendis corrupti ut. Laboriosam earum qui, quam aperiam tempora ullam ratione recusandae placeat nesciunt! Dolor deserunt culpa doloremque laudantium recusandae aliquam amet. Possimus, saepe deleniti autem modi, minus iusto ad sunt, error non aspernatur rerum praesentium adipisci sed doloribus amet consectetur quas corrupti animi similique assumenda earum ipsam. Quo provident laboriosam corporis, doloremque ducimus sunt perferendis quibusdam libero ullam delectus tempora aliquid fuga dolorem at, sequi harum soluta. Ipsam molestias maxime excepturi placeat obcaecati quis ipsum unde quas doloremque repudiandae.</p>
              </div>
              <div class="chat">
                <img className = 'chatIMG' src={aiIcon} alt="This is AI"/><p class="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore numquam totam illum enim sunt eligendi rem, minima adipisci aspernatur corporis perferendis corrupti ut. Laboriosam earum qui, quam aperiam tempora ullam ratione recusandae placeat nesciunt! Dolor deserunt culpa doloremque laudantium recusandae aliquam amet. Possimus, saepe deleniti autem modi, minus iusto ad sunt, error non aspernatur rerum praesentium adipisci sed doloribus amet consectetur quas corrupti animi similique assumenda earum ipsam. Quo provident laboriosam corporis, doloremque ducimus sunt perferendis quibusdam libero ullam delectus tempora aliquid fuga dolorem at, sequi harum soluta. Ipsam molestias maxime excepturi placeat obcaecati quis ipsum unde quas doloremque repudiandae.</p>
              </div>
              <div class="chat">
                <img className = 'chatIMG' src={aiIcon} alt="This is AI"/><p class="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore numquam totam illum enim sunt eligendi rem, minima adipisci aspernatur corporis perferendis corrupti ut. Laboriosam earum qui, quam aperiam tempora ullam ratione recusandae placeat nesciunt! Dolor deserunt culpa doloremque laudantium recusandae aliquam amet. Possimus, saepe deleniti autem modi, minus iusto ad sunt, error non aspernatur rerum praesentium adipisci sed doloribus amet consectetur quas corrupti animi similique assumenda earum ipsam. Quo provident laboriosam corporis, doloremque ducimus sunt perferendis quibusdam libero ullam delectus tempora aliquid fuga dolorem at, sequi harum soluta. Ipsam molestias maxime excepturi placeat obcaecati quis ipsum unde quas doloremque repudiandae.</p>
              </div>
              <div class="chat">
                <img className = 'chatIMG' src={aiIcon} alt="This is AI"/><p class="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore numquam totam illum enim sunt eligendi rem, minima adipisci aspernatur corporis perferendis corrupti ut. Laboriosam earum qui, quam aperiam tempora ullam ratione recusandae placeat nesciunt! Dolor deserunt culpa doloremque laudantium recusandae aliquam amet. Possimus, saepe deleniti autem modi, minus iusto ad sunt, error non aspernatur rerum praesentium adipisci sed doloribus amet consectetur quas corrupti animi similique assumenda earum ipsam. Quo provident laboriosam corporis, doloremque ducimus sunt perferendis quibusdam libero ullam delectus tempora aliquid fuga dolorem at, sequi harum soluta. Ipsam molestias maxime excepturi placeat obcaecati quis ipsum unde quas doloremque repudiandae.</p>
              </div>
              <div class="chat">
                <img className = 'chatIMG' src={aiIcon} alt="This is AI"/><p class="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore numquam totam illum enim sunt eligendi rem, minima adipisci aspernatur corporis perferendis corrupti ut. Laboriosam earum qui, quam aperiam tempora ullam ratione recusandae placeat nesciunt! Dolor deserunt culpa doloremque laudantium recusandae aliquam amet. Possimus, saepe deleniti autem modi, minus iusto ad sunt, error non aspernatur rerum praesentium adipisci sed doloribus amet consectetur quas corrupti animi similique assumenda earum ipsam. Quo provident laboriosam corporis, doloremque ducimus sunt perferendis quibusdam libero ullam delectus tempora aliquid fuga dolorem at, sequi harum soluta. Ipsam molestias maxime excepturi placeat obcaecati quis ipsum unde quas doloremque repudiandae.</p>
              </div>
              <div class="chat">
                <img className = 'chatIMG' src={aiIcon} alt="This is AI"/><p class="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore numquam totam illum enim sunt eligendi rem, minima adipisci aspernatur corporis perferendis corrupti ut. Laboriosam earum qui, quam aperiam tempora ullam ratione recusandae placeat nesciunt! Dolor deserunt culpa doloremque laudantium recusandae aliquam amet. Possimus, saepe deleniti autem modi, minus iusto ad sunt, error non aspernatur rerum praesentium adipisci sed doloribus amet consectetur quas corrupti animi similique assumenda earum ipsam. Quo provident laboriosam corporis, doloremque ducimus sunt perferendis quibusdam libero ullam delectus tempora aliquid fuga dolorem at, sequi harum soluta. Ipsam molestias maxime excepturi placeat obcaecati quis ipsum unde quas doloremque repudiandae.</p>
              </div>
            </div>
          </div>
          <div className = "inputBox">
            <div className = "chatInput">
              <input type = 'text' placeholder = 'Send a message'/> <button class="send">
                <img className = 'sendIMG' src={sendIcon} alt="Send" /></button>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default App;
