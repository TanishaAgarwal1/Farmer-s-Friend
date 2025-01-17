import { useState } from 'react';
import './Gpt.css';
import SendMsg from './SendMsg';

const GPT = () => {
  const [msg, setMsg] = useState("");
  const [msgList, setMsgList] = useState([]);

  const send = async () => {
    if (!msg) {
      return;
    }
    setMsgList(prevMsgList => [...prevMsgList, { msg, received: false }]);
    setMsg("");
    const response = await fetch('http://localhost:8000/suitabilityAssesment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ msg: msg }) // Assuming your backend expects the message in this format
    }).then(res => res.text());

    // Format the response with appropriate line breaks and without asterisks
    const formattedResponse = response.replace(/\* \*\*/g, '').replace(/\*/g, '\n');

    setMsgList(prevMsgList => [...prevMsgList, { msg: formattedResponse, received: true }]);
  }

  const typeMsg = (e) => {
    setMsg(e.target.value);
  }

  return (
    <div className='h-full'>
      <div className='gpt' style={{ backgroundColor: 'white' }}>
        {msgList.map((val, index) => (
          <SendMsg 
            key={index} 
            msg={val.msg} 
            received={val.received} 
            className={`message ${val.received ? 'received' : 'sent'}`}
          />
        ))}
        <div className='msg-send'>
          <input 
            type="text" 
            placeholder="Type your Message" 
            className="input input-bordered w-full max-w" 
            value={msg} 
            onChange={typeMsg} 
          />
          <button className="btn btn-success" onClick={send}>Send</button>
        </div>
      </div>
    </div>
  )
}

export default GPT;
